﻿ALTER ROLE [db_securityadmin] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_owner] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_ddladmin] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_datawriter] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_datareader] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_backupoperator] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];


GO
ALTER ROLE [db_accessadmin] ADD MEMBER [NT AUTHORITY\NETWORK SERVICE];

