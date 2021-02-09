-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Tempo de geração: 09/02/2021 às 18:43
-- Versão do servidor: 8.0.1-dmr
-- Versão do PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `correntedobem`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `area`
--

CREATE TABLE `area` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `description` text,
  `order_area` int(11) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL COMMENT '#ancora',
  `parent_id` int(11) DEFAULT '0',
  `identify` varchar(50) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `area`
--

INSERT INTO `area` (`id`, `title`, `logo`, `description`, `order_area`, `url`, `parent_id`, `identify`, `icon`) VALUES
(8, 'Quem Somos', NULL, 'Somos um grupo de pessoas que têm na veia o desejo de contribuir com a vida! Tudo nasceu com a iniciativa de 7 amigos, para comprar máscaras e aventais cirúrgicos! Depois disso o movimento cresceu dentro do grupo de Encontro de Casais com Cristo do Espaço Alpha! O grupo foi crescendo, assim como a necessidade do povo manauara! Nosso desejo é doar nosso tempo, nossos recursos e a nossa solidariedade para aqueles que neste momento realmente não tem com quem contar! Somos mais de 50 voluntários de diversas áreas de atuação e diversas localidades do Brasil e do mundo em uma missão pela vida em meio à Pandemia do Covid-19. <br />', 1, 'about', 0, NULL, NULL),
(10, 'Plano Tático', '', 'Atuar através de equipes com funções específicas para que os objetivos propostos sejam alcançados. A equipes serão divididas em:', 4, 'services', 0, NULL, NULL),
(15, 'Gestão de Crise', 'XaIOHc-7m.png', 'Equipe responsável por gerir os times, priorizando atividades essenciais à vida! Interação direta com líderes na busca de soluções rápidas e mobilização!<br />', 1, 'crise', 10, NULL, 'UJ7DCbhdl.png'),
(16, 'Operações Especiais', 'LRZiLu-Qd.png', 'Nesse grupo estão reunidos todos os líderes de equipe. <br />Aqui recebemos as demanda vindas do grupo geral para começarmos as tratativas e startar um plano de ação.  <br /><strong>Triagem</strong>:  Um equipe que com todo carinho e humanidade faz a coleta dos dados dos possíveis beneficiados de nossa corrente e encaminha para que cada equipe de nosso time de saúde, agilizando o atendimento à cada especialidade que hoje atua em prol da recuperação: time médicos, fisioterapeutas e psicólogos!<br /><strong>Saúde</strong>:  são encaminhados para equipe de triagem e adicionados à uma lista a ser avaliada pela equipe de saúde e posterior  tomada de decisão em  direção à suas necessidades. <br /><strong>Doadores</strong>: são direcionadas à equipe de doação e compras e logística. Aqui os recursos recebidos serão direcionados às metas propostas por esse projeto. <br /><strong>Voluntários</strong>: Serão direcionados conforme sua habilidade e disposição às diversas frentes de trabalho que possuímos:<br /><strong>Equipe de Saúde</strong>: Fisioterapeutas, Médicos, Enfermeiros, Psicólogos.<br /><strong>Marketing</strong>: divulgação do trabalho e captação de recursos. <br /><strong>Mobilização</strong>: equipe que fará as missões de rua, entrega de auxílio e doações, conforme plano. <br /><strong>Compras e Doações</strong>: gestão de recursos, compras e logística. <br /><br /><br />', 2, 'especiais', 10, NULL, 'fcO7k7DpQ.png'),
(17, 'Missão', '', '<strong>Missão</strong>: Levar recursos que auxiliem a proteção e manutenção da vida a unidades de saúde e pessoas com menor acesso em meio à pandemia da Covid-19<br /><strong>Visão</strong>: Sermos instrumentos de Deus na missão de salvar o máximo de vidas possível em nossa missão.<br /><strong>Valores</strong>: Fé para entregar Aquele que tudo pode quando nossos recursos forem limitados e Coragem para fazermos juntos tudo que estiver ao alcance de nossas mãos por meio dELe. Sabedoria sempre!', 2, 'missao', 0, NULL, NULL),
(18, 'Objetivos Estratégicos', '', '1- Oferecer suporte de oxigenioterapia bem como outros recursos de suporte e manutenção da vida à pessoas com dificuldades extremas de acesso à unidades de saúde, ou que tenham recebido orientação para terminar o tratamento em casa. É muito importante que essas pessoas já tenham sido avaliadas e examinadas anteriormente por uma equipe de saúde.   <br />2 - Direcionar recursos arrecadados em forma de EPI e Insumos às unidades de saúde de menor capacidade e menos assistidas. <br /><br />', 3, 'estrategico', 0, NULL, NULL),
(20, 'Equipe de Triagem', 'CVp_EHJdx.png', 'Um equipe que com todo carinho e humanidade faz a coleta dos dados dos possíveis beneficiados de nossa corrente e encaminha para que cada equipe de nosso time de saúde, agilizando o atendimento à cada especialidade que hoje atua em prol da recuperação: time médicos, fisioterapeutas e psicólogos!<br /><br /><br />', 3, 'triagem', 10, NULL, 'WjUAaCfZ20.png'),
(21, 'Equipe de Mobilização', 'neV6clxXy.png', 'Equipe de Mobilização<br />Após demandas geradas pela equipe de saúde ou doações/compras, a equipe de mobilização contará com voluntários divididos em turnos e manhã, tarde e noite para execução das atividades. Os mesmos deverão seguir para as missões com direcionamento claro  e proteção completa de EPI (Máscara N95, Gorro, Capote ou Macacão e Luvas de Procedimento). <br />Suas atividades incluem: <br />_ Recebimento de Doações.<br />_ Distribuição de de ações.<br />_ Empréstimo de Equipamentos (Protocolo).<br />_ Se possível suporte espiritual (ao menos uma oração). <br />_ Feedback de atividades concluídas ou não e possíveis justificativas. <br />', 4, 'mobilizacao', 10, NULL, 'qttl9ZsIrj.png'),
(22, 'Compras e Doações', 'stvPEgUCg.png', 'Neste grupo estão reunidas as equipes de captação de recursos, gestão de recursos, compras de material, logística e inventário. <br /><br />Captação de Recursos: busca de recursos financeiros, insumos ou equipamentos. <br /><br />Gestão de Recursos: entradas e saídas de caixa.<br /><br />Compras: Orçar e apresentar opções para aquisição das necessidades que surgem na missão. <br /><br />Logística: buscar soluções e executar atividade para a fim de que os recurso recebidos por compra ou doação chegue até a corrente.<br /> <br />Inventário: contar e gerir os recurso captados pela missão para que possa ajudar ao máximo de pessoas quanto possível. <br /><br /> <br />', 5, 'compras', 10, NULL, 'ua5d0q167m.png'),
(23, 'Equipe de Paciente', '8iMlGPZgo.png', 'Equipe de saúde multidisciplinar composta por voluntários enfermeiros, médicos, fisioterapeuras e psicólogos e tem como meta assistir a necessidade imediata à manutenção da vida dentros dos limites de ação e recursos  que a equipe da CorrentedoBemS.O.S possui.  <br /><br /><br />', 6, 'paciente', 10, NULL, 'Ima9OtKTrh.png'),
(24, 'Comunicação e Marketing', 'rZiBpbqNJ.png', 'Equipe linda que transforma as atividades realizadas em pontes para sensibilização e captação de novos companheiros para nossa corrente. Bem como expõe com transparência, beleza e discrição onde estão sendo empregados os recursos à Corrente do Bem confiados. <br /><br /><br /> <br />', 7, 'comunicacao', 10, NULL, 'sUvsUS2itK.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `arrecadacao`
--

CREATE TABLE `arrecadacao` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `value` decimal(13,2) DEFAULT NULL,
  `spent` decimal(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `arrecadacao`
--

INSERT INTO `arrecadacao` (`id`, `description`, `value`, `spent`) VALUES
(1, 'Valores angariados e gastos', '120000.00', '5000.00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `contato`
--

CREATE TABLE `contato` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `endereco` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `contato`
--

INSERT INTO `contato` (`id`, `email`, `telefone`, `endereco`) VALUES
(1, 'info@example.com', '(92) 9 9999-9999', 'A108 Adam Street<br />New York, NY 535022');

-- --------------------------------------------------------

--
-- Estrutura para tabela `email_config`
--

CREATE TABLE `email_config` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `port` varchar(45) DEFAULT NULL,
  `host` varchar(100) DEFAULT NULL,
  `secure` int(11) DEFAULT '0',
  `copy` varchar(255) DEFAULT NULL,
  `text_send` text,
  `text_response` text,
  `logo` varchar(50) DEFAULT NULL,
  `subject_send` varchar(255) DEFAULT NULL,
  `subject_response` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `email_config`
--

INSERT INTO `email_config` (`id`, `name`, `username`, `email`, `password`, `port`, `host`, `secure`, `copy`, `text_send`, `text_response`, `logo`, `subject_send`, `subject_response`) VALUES
(1, 'Corrente do Bem', 'd56da3db720689', 'do.bem.sos@gmail.com', '8a39a6ea2ecb35', '587', 'smtp.mailtrap.io', 0, 'cbcarlos08@gmail.com', 'Você recebeu um e-mail de contato', 'Agradecemos seu contato', 'e93N5Ls9A.png', 'Novo Contato', 'Obrigado!');

-- --------------------------------------------------------

--
-- Estrutura para tabela `email_contact`
--

CREATE TABLE `email_contact` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `email_contact`
--

INSERT INTO `email_contact` (`id`, `name`, `email`, `message`) VALUES
(1, NULL, NULL, NULL),
(2, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(3, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(4, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(5, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(6, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(7, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(8, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(9, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(10, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(11, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(12, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(13, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(14, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(15, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(16, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(17, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(18, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(19, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(20, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(21, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(22, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(23, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(24, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(25, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(26, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(27, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(28, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(29, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'fdsfsdf'),
(30, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g'),
(31, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g'),
(32, 'Jonathan Galucio Ramalho', 'pgadmin4@pgadmin.org', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a g');

-- --------------------------------------------------------

--
-- Estrutura para tabela `equipe`
--

CREATE TABLE `equipe` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `order_item` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0',
  `area_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `equipe`
--

INSERT INTO `equipe` (`id`, `name`, `order_item`, `parent_id`, `area_id`) VALUES
(15, 'Leliane Picanço', 1, 0, 15),
(16, 'Wanderley Cremonese', 2, 0, 15),
(17, 'Queila Alves Siqueira', 3, 0, 15),
(18, 'Rafael Santos', 4, 0, 15),
(19, 'Gestão', 1, 0, 21),
(20, 'Leliane Picanço', 1, 19, 21),
(21, 'Equipes:', 2, 0, 21),
(22, 'Jéssica Ferreira', 1, 21, 21),
(23, 'Locomoção:', 1, 0, 21),
(24, 'Adriano Augusto', 1, 23, 21),
(25, 'Arrecadação:', 1, 0, 22),
(26, 'Renata Marques', 1, 25, 22),
(27, 'Gestão de Recursos: ', 2, 0, 22),
(28, 'Keila Almeida', 1, 27, 22),
(29, 'Compras: ', 3, 0, 22),
(30, 'Marcelo Loquette', 1, 29, 22),
(31, 'Logística: ', 4, 0, 22),
(32, 'Katia Cangani', 1, 31, 22),
(33, 'Gestão de Cilindros: ', 5, 0, 22),
(34, 'Renata Melo', 1, 33, 22),
(35, 'Inventário:  ', 1, 0, 22),
(36, 'Michella Lasmar', 1, 35, 22),
(37, 'Lista de Triagem: ', 1, 0, 23),
(38, 'Luciana Menezes ', 1, 37, 23),
(39, 'Eliêda Giráldez', 2, 37, 23),
(40, 'Médica Líder: ', 1, 0, 23),
(41, 'Dra. Rita ', 1, 40, 23),
(42, 'Enfermeira: ', 3, 0, 23),
(43, 'Criação:  ', 1, 0, 24),
(44, 'Renan Queiroz ', 1, 43, 24),
(45, 'Alexandre Sou', 2, 43, 24),
(46, 'Karlus Macarthu', 3, 43, 24),
(47, 'Suporte:', 2, 0, 24),
(48, 'Anna Rodat', 1, 47, 24),
(49, 'Keila Almeida ', 2, 47, 24),
(50, 'Leliane Picanço', 2, 47, 24),
(51, 'Renata Franco Marques', 4, 47, 24),
(52, 'Rita Figueiredo', 5, 47, 24);

-- --------------------------------------------------------

--
-- Estrutura para tabela `menu`
--

CREATE TABLE `menu` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  `order_item` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `menu`
--

INSERT INTO `menu` (`id`, `name`, `url`, `order_item`) VALUES
(1, 'Quem somos', '#about', 1),
(4, 'Missão', '#missao', 2),
(5, 'Plano Tático', '#services', 4),
(6, 'Objetivos Estratégicos', '#estrategico', 3),
(8, 'Meta', 'meta.html', 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `meta`
--

CREATE TABLE `meta` (
  `id` int(10) UNSIGNED NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `meta`
--

INSERT INTO `meta` (`id`, `logo`, `description`, `image`) VALUES
(1, 'OruZItRc6.png', 'Só mais um é nossa meta! Mais um respirando e voltando a viver seus propósitos nesta caminhada. Com Deus sempre! E na certeza que temos um ao outro!\n\n', 'IxyLNRDBy.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `redes_sociais`
--

CREATE TABLE `redes_sociais` (
  `id` int(10) UNSIGNED NOT NULL,
  `rede` varchar(45) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `redes_sociais`
--

INSERT INTO `redes_sociais` (`id`, `rede`, `url`) VALUES
(1, 'instagram', 'https://www.instagram.com/correntedobemsos/');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tema`
--

CREATE TABLE `tema` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` text,
  `logo` varchar(100) DEFAULT NULL,
  `tema` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `tema`
--

INSERT INTO `tema` (`id`, `description`, `logo`, `tema`) VALUES
(1, 'Venha fazer parte desta corrente', 'ntbLNOYhZ.png', 'Corrente do Bem');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `token` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `name`, `email`, `password`, `token`) VALUES
(1, 'Carlos Bruno', 'cbcarlos08@gmail.com', '25d55ad283aa400af464c76d713c07ad', NULL),
(3, 'Gysa Brito', 'gysa@email.com', 'e10adc3949ba59abbe56e057f20f883e', NULL),
(5, 'Jonathan Galucio Ramalho', 'jonjon@email.com', 'e10adc3949ba59abbe56e057f20f883e', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `arrecadacao`
--
ALTER TABLE `arrecadacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `email_config`
--
ALTER TABLE `email_config`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `email_contact`
--
ALTER TABLE `email_contact`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Índices de tabela `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_equipe_area_idx` (`area_id`);

--
-- Índices de tabela `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `meta`
--
ALTER TABLE `meta`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `redes_sociais`
--
ALTER TABLE `redes_sociais`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `area`
--
ALTER TABLE `area`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `arrecadacao`
--
ALTER TABLE `arrecadacao`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `contato`
--
ALTER TABLE `contato`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `email_config`
--
ALTER TABLE `email_config`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `email_contact`
--
ALTER TABLE `email_contact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de tabela `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `meta`
--
ALTER TABLE `meta`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `redes_sociais`
--
ALTER TABLE `redes_sociais`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tema`
--
ALTER TABLE `tema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `equipe`
--
ALTER TABLE `equipe`
  ADD CONSTRAINT `fk_equipe_area` FOREIGN KEY (`area_id`) REFERENCES `area` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
