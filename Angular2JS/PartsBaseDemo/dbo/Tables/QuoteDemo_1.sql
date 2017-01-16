CREATE TABLE [dbo].[QuoteDemo] (
    [Id]            INT            IDENTITY (1, 1) NOT NULL,
    [CreatedBy]     NVARCHAR (250) NULL,
    [DateCreated]   DATETIME       NULL,
    [ModifiedBy]    NVARCHAR (250) NULL,
    [DateModified]  DATETIME       NULL,
    [QuoteNumber]   BIGINT         NULL,
    [ClientQuoteId] INT            NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_QuoteDemo_ClientQuoteId_ClientQuoteDemo_Id] FOREIGN KEY ([ClientQuoteId]) REFERENCES [dbo].[ClientQuoteDemo] ([Id])
);

