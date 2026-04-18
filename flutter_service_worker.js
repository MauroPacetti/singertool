'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e92d18d037956913ed3ef3f3fc87c03",
".git/config": "7a36a9ba04c49bcbd7be6ae596531561",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0fe3bfa97daebf7544cd402d1227c991",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b2a45c22f05d5b5b2f82d13a0bac959",
".git/logs/refs/heads/main": "3b2a45c22f05d5b5b2f82d13a0bac959",
".git/logs/refs/remotes/origin/main": "b9b45fc894f3da07cabcb2ead13e4af7",
".git/objects/01/3af868c9829c653607c17c8f916839787d0b50": "5f32cff7cb76d95e68156e4098e65690",
".git/objects/02/fbf4979e31d24190d6d2ba23851789872a2a7e": "8a06bc280c548272d90f0b30017c9844",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/35f89fe553d162f9b3c5cfe9400153c28a9185": "d3c13c6df577eb51ddaaf92393fe60ca",
".git/objects/05/d17d37b1f3b75c9d54337659b5ec706018d4b2": "c2ffe6cd8a72b383b8161448de157223",
".git/objects/06/324171088fe8eeb139dfd54e301ef7b002f44d": "3b1e2f8228e1e617b0cb667fc0487303",
".git/objects/06/379598f109fb59d25e52fca7d1226da7316a39": "b5cb301767f946f57cb00cfbeea34bc9",
".git/objects/0a/abaaf65e483f5d2371d5f09cb269cf1c91f735": "8309e41cc13e278455b2e5d476eccaf1",
".git/objects/0e/23c0ff749f90d4515ed872afe921531a7ccde8": "faad37b204855a6fcbf571ac23a5c56b",
".git/objects/0e/ce609d281155ad5ec6c22e4ed18448ae39693b": "3a7d916556048e9f92cdee558a5ea2cd",
".git/objects/0f/17294d1eb02a0f0d96eaf152a81f4a8c9f44a1": "f6c730971739eca805d50e71ba89baee",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/10/0f782844bc48dc911e8123dcb88440d6bed323": "6dbe000cbfca137a4a5f4fb3f138965b",
".git/objects/10/9468cb4157f9c717ffab2efe50c6d2d4a4a3d7": "03171e02cfa3c8f15f885f1cf5f46aec",
".git/objects/12/0e071d074b2491e75f489b2334be52f68ff269": "9048999d1462adebef665977cdd5e8d3",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/21/4ca7d7b857638cb8cff6456b31dd1f4b191895": "d1738ee06593146f55a9d2deb2e7a778",
".git/objects/22/6379db5c0552afe9dd154ade1742672d4a8a00": "2251a865a46784ac03507ef169109c04",
".git/objects/24/af812e10385b4690ba6d5ee8966acf179b7bd5": "bd483af2b1c169b7a774862cf4845816",
".git/objects/25/46d2f12df3a6694baf39024d4ecc456f8549ae": "e8a496ccc8132ef7e6b12daf3ca34fdf",
".git/objects/25/887b455ca22a956f6f53f6115da742bd57b309": "2db19a97deca4d892b315d86345b891f",
".git/objects/25/b7d1bfd327e2de43a6c3ef338c629a602c80ec": "bbacee50f6a6a7a42ee3f565eb702a17",
".git/objects/26/b62d262390bdb0c99cf593bbbdace08de0eb0b": "caf87a150b82b56ed127884227fe2a49",
".git/objects/28/6d1ad1c872134c2bd0f4cdb8cba0e4f14940c3": "4228adeddcc8beba653ae3729a6890e1",
".git/objects/29/239632989b4345ae0829d799a1a9813ea40763": "f104fe1f77a63cc0071c7b4ff2bb8072",
".git/objects/2a/d10c7dbd9284316adc243fd3bc2812146140f7": "868f0f47cf56f6fcd52011c4aa457da2",
".git/objects/30/34fbb49277bd1a6c1993a93c22de91663f90fb": "4f5a95099c3c72edc0b3293dc22cd5aa",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/f59e7e51a39d46c972d54aa891a3b788900623": "66de4d94fcdc3e896dc2208ddbb4c4e4",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/198df7b5cc8acb55aee840b76878effbf3751e": "6a7ca06c6a40702105b3404936616c04",
".git/objects/36/5ff76817f1100923de08bfdf8adb61d0fb9e43": "15f1618632220117e1a81563b946bb3c",
".git/objects/3b/4ea9414db74bb678c099acf75704b4c1e43cfe": "35ed670f6d24e809f576b6e637a218a3",
".git/objects/3d/f27a9d5f4f6105b169f79904c5626dfd9f4d8c": "686534eec227a13ae4296d9503c6e277",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/e3cdd12ec38298622062151ee0252324ae6c25": "7a5bc9dee073169dee3b9f724d4a643e",
".git/objects/43/f7d25ae7b9a41d2f1713f861943a29e14ecfe0": "1bc37d9e695e57d0add31f61f99a93f0",
".git/objects/45/943ebfb8d41119be0a8d10f31fb684d844c9a5": "86c818ceebfa6b26d72be6816accb5c4",
".git/objects/48/ebaca44f47d1a36c35a56c75859cece39af88e": "ea718a6cea3e9a8485ed2d041605d769",
".git/objects/4a/f5c6be994d2b7226ef268336dac77c06e92041": "c7be53b478d9da4f169bd42040ea1a75",
".git/objects/4c/56b3e63ae9a3c443ee4742ec5a81b3fdcc5449": "78767e6719265b5cef20294596667adc",
".git/objects/4d/2f3b993dce841c1528a841b67274df31011a26": "82b0db2796bf707f9602d0299d9a75db",
".git/objects/4d/3403f8b8ca24663f32f9339d0d19b61a2ea9fd": "59166c05f99c3cbe94e49700fb6f3aea",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/c18feda2627090daa7d4fcd5b841296ff2e334": "09a49e878d529d23cccb5594d4fbaa79",
".git/objects/50/d8c35c39ed6980cf910bc8b0a6011296adaea5": "d37f1a579417cc01d008f03fbbd28e7c",
".git/objects/52/203f27bdbcdca51bde289f8fea7d0a2e5f3c31": "4102743c091d80bef53c2cd6e41ff729",
".git/objects/53/3ba828659c2518e2b3305d39052b01fa808f9b": "0b36233035708044c401a8b1a37bc032",
".git/objects/53/3e9971919353a62dfee8e23899a69b8b82a88c": "c2e9301d7ed18f65951e6bf31053d3d3",
".git/objects/56/8faf5bb3a450758397acfaca7e3022c07ed134": "a5343b0267c70633be6f2050f5b5ca80",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/4ec99827b1fc69d5ebbe1a818c7424d569562c": "2e42a6f959f67463613f10060ec51f20",
".git/objects/63/2ee98b914e0173c2c578377bc89abbb5b6ebd2": "1fc9af05f54a6a1cd637a8c0b237dda6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/bbee49ace52cd62cdcb0ba31182e55e30b6f09": "da8e0c84417b2e8364de55732eab7875",
".git/objects/67/cc3c146ca6bb7f1f5f479f4a0a8c93baf7f6d6": "10bfbe941a64c6d1502cf2b3b52b71f3",
".git/objects/68/14f5035ba76d8ab5439478566b8f0c9485fdc4": "3f934156019f1536f1ddf51b971340b7",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/9e002d5b06acdf946178a6771b2fc979161069": "c7590ca4c074c3f7b5f1865ea1e1d3cc",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/74/4363c6983817e72ea712932569bf083c862e50": "98aefc376950f641a22f73c2bd5c8787",
".git/objects/75/883a194c7da7e31fe8dbd20d832caceee72ec8": "8e56e054896db817ac43a43d4f5341c4",
".git/objects/76/27076e7b60efc03e0183fffd83671cad58328e": "63f2c199d94e6e5da8d96b2b8a61082f",
".git/objects/79/026884baf3d9575f2aefb4a2f99385d2c54d00": "186e457069ecbd14703525e6f9632fd4",
".git/objects/7b/16483fd4db9e1d36031deaf39a88372a61d03b": "0de48c508ef012697b557b2137d998d6",
".git/objects/7d/af7790d6ecb8302012278f196a81ba4c329c98": "c4b133199e65cd5880ec386cdd90cf45",
".git/objects/7e/69049be5a8ba1f4ce6acd26c55ace9e82f5dce": "0fe64f068c5088edb0d15e23c75bb4f1",
".git/objects/81/2be44e3a5a3778600873e7bca7562227cc74b1": "6e108cddf44699eef8c5888f4c063d90",
".git/objects/85/b6e2050292d87c962c685b27594b6b35f850a3": "2739e7aa8e90ce029b91e456e1061c61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b2431dc3394e70875c30c466a212d9b720b81f": "850c2b6f8f9847596ced2e6c5380be05",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/ef2670cee5fc81674f1b96560dc23882b19161": "b44f0439d855dfed1eb9fad6e0190073",
".git/objects/92/30ae4069afab1b13bc17f9cd66ca78b17911d9": "c2f07a88dd01a9cb5569e3806a5417e1",
".git/objects/94/d70b2ff56191b927a838c546fc74d90160bbfe": "e0e71ccddc5acd85aedf5797a3f3fde6",
".git/objects/97/1e69dd7c5569b179c44368cb8e96387c49e03f": "6793f0c1d9c22c2f2207bfdcae7302d9",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/be193abc9eada4b36c0c9e877c6cd92f5794fc": "0afd88a42e8f4e544ed358f2945d44ba",
".git/objects/99/99ea5d40eb634a70844b09b8bfde3c775dda41": "b40e27bae6e367d8057584ca072be3b5",
".git/objects/9e/500181059190b4daad2e4cc677ce0129f80a57": "9730143005a990eb36369c7c623d1da4",
".git/objects/a2/518c78e1247b1ede2224b5028702704dcf59a7": "e8b587c9f6b4556127011245f1fb01b5",
".git/objects/a2/68ad3fc266ab9ba828e8acc90478e28f9d88b9": "5bf83072edf693e9a84cd9ec88655da6",
".git/objects/a2/dd463e5cee9933dad817cf0d0c9d7b80952f84": "1b0f7fdb8327980e88e02e65a91a3640",
".git/objects/a3/0e8e73d640cca6195e90c601731fa5057cb3a0": "54961f12e42ffa905106ce1a0aa98d41",
".git/objects/a5/3b6f5df1318cd385378d468e5bbcbd17cf8d1f": "1af2fe5a013070936965ebac139733ce",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/6f043bde367dea565104d922ac45b12ea458ee": "215e9fb6713299ecbd507c2d15cd0a2a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/4b16450ed6c38fc824f6b520771ee0b5d53d44": "5292bab1a02a725b9ae0bf6896d80a73",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/85ea8fd6bc06725c4351798229ac83cb71c59e": "bd03ae794ff440542868d546b12e5609",
".git/objects/af/491fea920e0f6672c13502936678dd4eafc08a": "a406feaacb25b86150726f317b33dd7c",
".git/objects/af/c953ae118fc60f61b7a3adb7bf50c356888620": "a10e986b99af560ab52d1f9cc081de73",
".git/objects/b1/9edc3add05de2357f97d9d98077e1c435cacf5": "d30907af0748f8407d59a330351d4cb3",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/b3/18655285982aa785dff727ec088d52ccd1db1c": "4e4427384285ae46d39a968d74dda326",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/c1/ed37da154af22c928bc0f49c495bb211f69ca1": "43223f8d1bf379c65ca17efa79eea136",
".git/objects/c8/b599b17675d9445d41715a50bb2c42a502395f": "5583dc426781023f0966f5d12ed0f869",
".git/objects/ca/60edad68b3355bc1441535580771510c958103": "e2231f3969c841c23fae0c8c66032b8f",
".git/objects/cb/3e282a3bc8517af9aa0d7dd5ca678ac2aeb122": "1da287a18c523bea2e5348b55d6e5366",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d1/bb9de84eac7ab3e41234d344e1a664071d250e": "f7850ecc5f9ce2ff40844cee70cb7948",
".git/objects/d2/b1eb88d7e5d7cc8530f1d6d74f3694490b51b5": "7db7e9b72df336fdb723a3005ef3c7d4",
".git/objects/d3/03b556e7aa3ed69e78c73475900730398137d3": "b3cccbb29dc76f3aa60d03ae6d5e82d0",
".git/objects/d4/27ba10754a7f248cde31efd492f828df7b5be9": "290385d150f79788d38cf3a26e99323d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3f7ae01a6fb23d3053cbc170fec6bc909fc6cc": "fbdad147e8c8025b0a692fe76c059c3f",
".git/objects/d5/e077d6913fc6ae27234e4c6c948d674dbc7de7": "57d7b715abbb5203772324e75da2bc77",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a9492ac20b931fbe119b3e736847662b3ea2f5": "62c76e738e7ac32b273f1a4743d060f3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/21d280acd3913ece16aa7ccf008ae986160b58": "03df0a1261e070b0d10f548d5343ae30",
".git/objects/dd/96a29ceb4f1f6d44125f3ae571771a722cb6d0": "1f2dcc769bb0e943154f61516807903c",
".git/objects/dd/c78c1ae8c5b68a8f5f7479daaebd62591cd5bd": "6c073b069700856f8038194002742c5c",
".git/objects/df/e91541a7c0f809745cff61794721290968c9f2": "cfb1240495f9b68e35b6cf2033a1996b",
".git/objects/e1/4f4a9f6c7ae9e20df542bfc0c00f5895b94c1e": "9eb472708601c8090392e44f21f8a312",
".git/objects/e2/923b04f0f1d6380b6cb50dc47c21a643f18ef7": "5cdcd274eba19742417c1a9fbea57fc6",
".git/objects/e4/6a41af3377a3b03e9811f0cc13441634c10fdb": "e837611bb960db186c9c1fda89c5e867",
".git/objects/e4/b5ea4528d138550243be2f8790acbeb9edd07c": "b4bcba0bdc48a2b6250edd21a366d2d4",
".git/objects/e6/c3f1591ee70ac18423695854eb0fea5c2097fe": "eeb700edd05c96bd1c3127f30e5ed583",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/427c1601fd10969874f4a9be7224dbb9605047": "d675489de82fab2a2d95570a88cb732e",
".git/objects/ed/d123b20efbb3c94e262a4b86a85abd6c56c1b2": "d0c070e6388073b3efc447cbb99877ae",
".git/objects/ee/00ddfc5612a152429dea06c73fdaa13d2c51bd": "1e95e5b046cdc8e45e6cde75854036d4",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/4b8ad8e2614ea5fad93a763c312ea2157beb72": "26f8caa0309eddf4d120a4ff92e12edd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/32cc4cedf580b63ec12fb95be8f465f8e0db12": "efde407252f0c409a574985ebaf44546",
".git/objects/f9/22efc4020f903ece6982acc49c9e10d4192ab2": "09845ba43dd53bf39c5da305596f3c2b",
".git/ORIG_HEAD": "fa94bcf3ee644385da1d3a5582a5962c",
".git/refs/heads/main": "3c7496b9d43faf60debb1a6777aef6a7",
".git/refs/remotes/origin/main": "3c7496b9d43faf60debb1a6777aef6a7",
"apple-touch-icon-152.png": "bae0d409eb33a8f276328a51bd9efc32",
"apple-touch-icon-167.png": "dc52ce27e365a58c70d099e955ef43aa",
"apple-touch-icon-180.png": "74d1e262524fd561be8bc989f81b10f8",
"apple-touch-icon.png": "74d1e262524fd561be8bc989f81b10f8",
"assets/AssetManifest.bin": "4345409c4691a5268a98c8cb34a30570",
"assets/AssetManifest.bin.json": "3c7904f2a052cc66756d8ef75441a057",
"assets/AssetManifest.json": "3616e735cfdfb734710366ef63ccb992",
"assets/assets/logo.png": "102325ab631cd54c0043bab01db33066",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "5fdbdbf9a5ccc48eb47c8bf8fadfcd88",
"assets/NOTICES": "828aac2b63480ccf92e1e06dbfbfedd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "ed0b87504ad085602d77fc6e5ae562b5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6d489088b6ab8545a2721efe7dfb5c24",
"icons/Icon-192.png": "ed0b87504ad085602d77fc6e5ae562b5",
"icons/Icon-512.png": "cdca71deadb5b35d3451ec2fcda4094b",
"icons/Icon-maskable-192.png": "21e636e291a1c3427b511c0cf4f235b9",
"icons/Icon-maskable-512.png": "c4aa4d8ceb60631b7f96837840ef59cd",
"index.html": "0f06e44525529272d8cf0c5e9b2972be",
"/": "0f06e44525529272d8cf0c5e9b2972be",
"main.dart.js": "de2ade149fde40d95ff559306e54f9e6",
"manifest.json": "ae5879e6b1c234e10124969420e1e0bb",
"version.json": "396481530472d279dc13026806caf433"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
