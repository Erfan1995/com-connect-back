const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, userRoleService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);

  await authService.updateRefreshTokenCookie(req, res, tokens.refresh);

  const preUserRole = await userRoleService.getRoleByName('preUser');
  await userRoleService.createOrUpdateUserRole(user.id, preUserRole.id);

  res.status(httpStatus.CREATED).send({ user, token: tokens.access.token });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  const userRoles = await userRoleService.getRolesByUserId(user.id);

  await authService.updateRefreshTokenCookie(req, res, tokens.refresh);

  res.send({ user, token: tokens.access.token, roles: userRoles });
});

const logout = catchAsync(async (req, res) => {
  const jwtRefresh = await authService.checkRequestHasRefreshTokenCookie(req);
  res.clearCookie('jwtRefresh');

  await authService.logout(jwtRefresh);

  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const jwtRefresh = await authService.checkRequestHasRefreshTokenCookie(req);
  const tokens = await authService.refreshAuth(jwtRefresh);
  await authService.updateRefreshTokenCookie(req, res, tokens.refresh);

  res.send({ token: tokens.access.token });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.body.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.body.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};
