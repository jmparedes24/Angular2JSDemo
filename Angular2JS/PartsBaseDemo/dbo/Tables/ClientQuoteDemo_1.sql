CREATE TABLE [dbo].[ClientQuoteDemo] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [CreatedBy]    NVARCHAR (250) NULL,
    [DateCreated]  DATETIME       NULL,
    [ModifiedBy]   NVARCHAR (250) NULL,
    [DateModified] DATETIME       NULL,
    [FirstName]    NVARCHAR (250) NULL,
    [LastName]     NVARCHAR (250) NULL,
    [Phone]        NVARCHAR (250) NULL,
    [CountryId]    INT            NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

