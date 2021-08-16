CREATE TABLE IF NOT EXISTS `solicitacoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pedido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `solicitacoes` (`id`, `nome`, `valor`, `createdAt`, `updatedAt`) VALUES
(1, 'Nome', 'email', 'pedido', '2019-05-05 15:03:53', '2019-05-05 15:03:53');
COMMIT;