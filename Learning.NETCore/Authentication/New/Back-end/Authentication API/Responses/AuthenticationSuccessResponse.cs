﻿namespace Authentication.Responses
{
    public class AuthenticationSuccessResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}