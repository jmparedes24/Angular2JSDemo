CREATE TABLE [dbo].[Country] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [CreatedBy]    NVARCHAR (250) NULL,
    [DateCreated]  DATETIME       NULL,
    [ModifiedBy]   NVARCHAR (250) NULL,
    [DateModified] DATETIME       NULL,
    [Name]         VARCHAR (250)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

