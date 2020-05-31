use myweb;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user`(
  `id` bigint(32) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) DEFAULT NULL,
`sexy` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `age` bigint(32),
 `education` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

insert into user values (1, 'sunyanjie', 'Ů','123456', 'nanjing', 22, 'studying');
insert into user values (2, 'sunyanjie1','Ů', '123456', 'nanjing', 23, 'graduate');
insert into user values (3, 'sunyanjie2','Ů', '123456', 'nanjing', 24, 'studying');
insert into user values (4, 'sunyanjie3', 'Ů','123456', 'nanjing', 25, 'studying');
insert into user values (5, 'sunyanjie4', 'Ů','123456', 'nanjing', 26, 'studying');
insert into user values (6, 'sunyanjie5', 'Ů','123456', 'nanjing', 27, 'studying');
insert into user values (7, 'sunyanjie6', 'Ů','123456', 'nanjing', 28, 'studying');
insert into user values (8, 'sunyanjie7', 'Ů','123456', 'nanjing', 29, 'studying');
insert into user values (9, 'sunyanjie8', 'Ů','123456', 'nanjing', 30, 'studying');
insert into user values (10, 'sunyanjie9', 'Ů','123456', 'nanjing', 31, 'studying');
insert into user values (11, 'sunyanjie10', 'Ů','123456', 'nanjing', 15,'studying');
insert into user values (12, 'sunyanjie11', 'Ů','123456', 'nanjing', 17, 'studying');
insert into user values (13, 'sunyanjie12', 'Ů','123456', 'hangzhou', 15,'studying');
insert into user values (14, 'sunyanjie13', 'Ů','123456', 'beijing', 17, 'studying');