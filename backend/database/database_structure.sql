DROP TABLE IF EXISTS `userData`;

CREATE TABLE `userData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT 'api+practice23@gmail.com',
  `phone` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) 

LOCK TABLES `userData` WRITE;

INSERT INTO `userData` VALUES (1,'Leanne Graham','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org'),(2,'Ervin Howell','Shanna@melissa.tv','010-692-6593 x09125','anastasia.net'),(3,'Clementine Bauch','Nathan@yesenia.net','1-463-123-4447','ramiro.info'),(4,'Patricia Lebsack','Julianne.OConner@kory.org','493-170-9623 x156','kale.biz'),(5,'Chelsey Dietrich','Lucio_Hettinger@annie.ca','(254)954-1289','demarco.info'),(6,'Mrs. Dennis Schulist','Karley_Dach@jasper.info','1-477-935-8478 x6430','ola.org'),(7,'Kurtis Weissnat','Telly.Hoeger@billy.biz','210.067.6132','elvis.io'),(8,'Nicholas Runolfsdottir V','Sherwood@rosamond.me','586.493.6943 x140','jacynthe.com'),(9,'Glenna Reichert','Chaim_McDermott@dana.io','(775)976-6794 x41206','conrad.com'),(10,'Clementina DuBuque','Rey.Padberg@karina.biz','024-648-3804','ambrose.net');
