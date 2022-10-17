-- Criando banco de dados

-- CREATE DATABASE bd-find-dev

-- Usando banco

--     Use bd-find-dev;

-- -- Criando tabela usuario empresa
--     create table [dbo].[Usuario_Empresa](
--         idEmpresa int primary key IDENTITY(100,1),
--         cnpj char(18),
--         nome varchar(50),
--         email varchar (45),
--         cep char(9),
--         senha varchar(100)
--         );
--
--     INSERT INTO Usuario_Empresa VALUES
--         ("03.778.130/0001-48", "Lucasteste", 'teste@hotmail.com', 06126020,'123');
--
--
-- -- Criando tabela usuario desenvolvedor
--     create table [dbo].[Usuario_Dev](
--         idDev int primary key IDENTITY(100,1),
--         nome varchar(50),
--         email varchar (45),
--         senha varchar(10),
--         cpf char(18),
--         telefone varchar(11),
--         cep char(9),
--         );
--
--     INSERT INTO Usuario_Dev VALUES
--         ("495.965.685-95", "LucasDevteste", 'teste@hotmail.com', 06126020,'123');
--


--                 OU


-- -- Criando tabela usuario
--     create table [dbo].[Usuario](
--         idUser int primary key IDENTITY(100,1),
--         nome varchar(50),
--         email varchar (45),
--         senha varchar(10),
--         telefone varchar(11),
--         cep char(9),
--         descricao varchar(500),
--         isfreelancer TINYINT,
--         status varchar(45),
--         cpf char(18),???
--         );
--
--     INSERT INTO Usuario_Dev VALUES
--         ("495.965.685-95", "LucasDevteste", 'teste@hotmail.com', 06126020,'123');
--


-- Verificar regra de negocio com o resto para melhor implementaçao da classes de usurio

--
-- -- Criando tabela perfil
--     Create table [dbo].[Perfil](
--       idPerfil int primary key  IDENTITY (1,1),
--       descricao varchar(500),
--       status varchar(45)
--     );

-- Criando tabela vaga

--     CREATE table [dbo].[Vaga](
--       idVaga int primary key IDENTITY(100,1),
--       titulo varchar(100),
--       descricao varchar(500)
--     );

-- Criando tabela tag

--     CREATE table [dbo].[Tag](
--       idTag int primary key IDENTITY(100,1),
--       funcao varchar(45),
--       senioridade varchar(50)
--     );

