// AUTO-GENERATED from the original MHW Iceborne site content. Edit freely.

export interface DlcPack {
  image: string;
  title: string;
  fee: boolean;
  /** Price / notes block (trusted HTML) */
  priceHtml: string;
  /** Toggleable contents list (trusted HTML) */
  contents: string;
}

export interface DlcItem {
  image: string;
  title: string;
  fee: boolean;
}

export const DLC_MENU: { anchor: string; label: string }[] = [
  {
    "anchor": "pack",
    "label": "[Value Packs]"
  },
  {
    "anchor": "delux",
    "label": "[Deluxe Kit]"
  },
  {
    "anchor": "pose",
    "label": "[Pose]"
  },
  {
    "anchor": "gesture",
    "label": "[Gestures]"
  },
  {
    "anchor": "stamp",
    "label": "[Chat Stickers]"
  },
  {
    "anchor": "style",
    "label": "[Appearance]"
  },
  {
    "anchor": "costume",
    "label": "[Handler Costumes]"
  },
  {
    "anchor": "charm",
    "label": "[Pendant]"
  },
  {
    "anchor": "room",
    "label": "[MHW:I Room Decor]"
  },
  {
    "anchor": "figure",
    "label": "[MHW:I Monster Figure]"
  },
  {
    "anchor": "music",
    "label": "[MHW:I Music Player]"
  }
];

export const DLC_SECTIONS: { id: string; title: string }[] = [
  {
    "id": "pack",
    "title": "Value Packs"
  },
  {
    "id": "delux",
    "title": "Deluxe Kit"
  },
  {
    "id": "pose",
    "title": "Pose"
  },
  {
    "id": "gesture",
    "title": "Gestures"
  },
  {
    "id": "stamp",
    "title": "Chat Stickers"
  },
  {
    "id": "style",
    "title": "Appearance"
  },
  {
    "id": "hairstyle",
    "title": ""
  },
  {
    "id": "costume",
    "title": "Handler Costumes"
  },
  {
    "id": "charm",
    "title": "Pendant"
  },
  {
    "id": "room",
    "title": "MHW:I Room Decor"
  },
  {
    "id": "figure",
    "title": "MHW:I Monster Figure"
  },
  {
    "id": "music",
    "title": "MHW:I Music Player"
  }
];

export const DLC_VALUE_PACKS: DlcPack[][] = [
  [
    {
      "image": "/assets/images/topics/dlc/img_pack02.jpg",
      "title": "MHW:I - Complete Gesture & Pose Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Pose Set: Crouching<br>Pose Set: Unique<br>MHW:I Gesture Pack: Swag Dance Set<br>MHW:I Gesture Pack: Clean Dance Set<br>Pose Set: Weapon Pose (3)"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack03.jpg",
      "title": "MHW:I - Complete Sticker Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Sticker Set: Hunter Items Set<br>Sticker Set: Monster Statuses Set<br>Sticker Set: Iceborne Monsters Set<br>Sticker Set: Raccoon City Set<br>Sticker Set: Lynian Set<br>Sticker Set: Friendly Greetings Set"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack04.jpg",
      "title": "MHW:I - Complete Handler Costume Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "The Handler's Kokoto Gal's Costume<br>MHW:I The Handler's Tyrant Costume<br>The Handler's Graceful Short Dress<br>The Handler's Techno Handler Costume<br>The Handler's Rose Vestido<br>The Handler's Festive Samba Costume<br>Handler's [Autumn Costume］"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack05.jpg",
      "title": "MHW:I - Complete Hairstyle Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Hairstyle: Wild Pompadour<br>Hairstyle: Mysterious Samurai<br>Hairstyle: Artful Buzz<br>Hairstyle: Hime Cut<br>Hairstyle: Light & Wavy<br>Hairstyle: Semi-long Up<br>Hairstyle: Great Mohawk<br>Hairstyle: Pleasant Ponytail<br>Hairstyle: Short Bob<br>Hairstyle: Long & Wavy<br>Hairstyle: Half Ponytail<br>Hairstyle: Fluffy Mop<br>Hairstyle: Rath-a-like<br>Hairstyle: Wandering Samurai"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack06.jpg",
      "title": "MHW:I - Complete Pendant Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Pendant: Stuffed Felyne Teddy<br>Pendant: Stuffed Melynx Teddy<br>Pendant: White Felyne Teddy<br>Pendant: Pink Felyne Teddy<br>Pendant: Grape Felyne Teddy<br>Pendant: Mint Felyne Teddy<br>Pendant: Orange Felyne Teddy<br>Pendant: Moly Pendant - Luck<br>Pendant: Moly Pendant - Health<br>Pendant: Moly Pendant - Safety<br>Pendant: Moly Pendant - Love<br>Pendant: Moly Pendant - Protection<br>Pendant: Moly Pendant - Passion<br>Pendant: Moly Pendant - Peace<br>Pendant: Pukei Strap<br>Pendant: Coral Pukei Strap<br>Pendant: Swinging Rajang<br>Pendant: Swinging Furious Rajang<br>Pendant: Strollin' Paolumu<br>Pendant: Strollin' Nightshade<br>Pendant: Flying Meduso<br>Pendant: Flying Meduso Colony<br>Pendant: Red Balloon<br>Pendant: Red and White Balloons<br>Pendant: Rainbow Balloons<br>Pendant: Emerald Kulve Heart<br>Pendant: Ruby Kulve Haeart<br>Pendant: Crystal Kulve Haeart<br>Pendant: Topaz Kulve Haeart<br>Pendant: Sapphire Kulve Haeart<br>Pendant: Rosegem Kulve Haeart<br>Pendant: Gold Heavenly Dragon<br>Pendant: Silver Heavenly Dragon<br>Pendant: Ruby Crystal Knife<br>Pendant: Amber Crystal Knife<br>Pendant: Azure Crystal Knife<br>Pendant: Phantom Azure Butterflies<br><br>Pendant: Phantom Jade Butterflies<br>Pendant: Phantom Magenta Butterflies<br>Pendant: Fulgurbugs<br>Pendant: Dracophage Bugs<br>Pendant: ［Gold Clock］<br>Pendant: ［Silver Clock］<br>Pendant: ［candle］<br>Pendant: ［Kulu-Ya-ku］<br>Pendant: ［Angel Poogie］<br>Pendant: ［Demon Poogie］<br>Pendant: ［Foody set］<br>Pendant: ［Velkhana］"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack07.jpg",
      "title": "MHW:I - Complete Room Decor Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "MHW:I Room Decor: Giant Stuffed Doll Set<br>MHW:I Room Decor: Cute Decor Set<br>MHW:I Room Decor: Intimate Decor Set<br>MHW: I Room Decor: Lighting Set<br>MHW:I Room Décor: Splendid Décor Set<br>MHW:I Room Décor: Lil' Bit of Glamour Decor Set<br>MHW:I Room Décor: Mini Model Set<br>MHW:I Room Decor: Poogie Set<br>MHW:I Room Decor: Felyne Set<br>MHW:I Room Decor: Pukei-Pukei Set<br>MHW:I Room Decor: Boaboa Set<br>Beotodus Skeleton"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack08.jpg",
      "title": "MHW:I - Complete BGM Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "BGM vol 1<br>BGM: Black Impact<br>BGM vol 2<br>BGM vol 3<br>BGM vol 4<br>BGM vol 5<br>BGM vol 6<br>BGM vol 7"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack12.jpg",
      "title": "MHW:I - Free Content Collection Pack",
      "fee": false,
      "priceHtml": "",
      "contents": "Gesture Pack 1<br>Hairstyle: Provisions Manager<br>Hairstyle: Field Team Leader<br>Hairstyle: Handler<br>Hairstyle: Admiral<br>Sticker: Mingle Hunter<br>Gesture: Happy Hunting!<br>Monster Figure: Great Jagras<br>Gesture Pack: Hype Up Set<br>Monster Figure: Grand Appreciation Fest<br>Hairstyle: Serious Handler<br>Hairstyle: Analytics Director<br>Hairstyle: Third Fleet Master<br>Hairstyle: Commander<br>Hairstyle: The Tracker<br>Hairstyle: Excitable A-Lister<br>Hairstyle: The Seeker<br>Pendant: Super Eight mini 1P<br>Pendant: Super Eight mini 2P"
    }
  ],
  [
    {
      "image": "/assets/images/topics/dlc/img_pack09.jpg",
      "title": "MHW:I - Capcom Collection Value Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Gesture: Hadoken!<br>Gesture: Shoryuken!<br>Sticker Set: SFV<br>Handler's Chun-Li Costume<br>Sticker Set: Mega Man<br>Gesture: Devil May Cry Dual Guns<br>Sticker Set: Devil Mary Cry Set<br>Sticker Set: Raccoon City Set<br>Handler'S Tryant Costume<br>BGM: Black Impact"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack10.jpg",
      "title": "MHW:I - Trendsetter Value Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "Hairstyle: Wandering Samurai<br>Hairstyle: Fluffy Mop<br>Pendant: Pukei Strap<br>Pendant: Strollin' Paolumu<br>Pose Set: Weapon Pose (3)<br>Pose Set: Crouching<br>Gesture Pack: Swag Dance Set<br>Gesture: Hip Hop<br>Gesture: Windmill Whirlwind"
    },
    {
      "image": "/assets/images/topics/dlc/img_pack11.jpg",
      "title": "MHW:I - Seliana Room Value Pack",
      "fee": true,
      "priceHtml": "",
      "contents": "MHW:I Room Decor: Intimate Decor Set<br>MHW:I Room Décor: Splendid Décor Set<br>MHW:I Music Player: Additional BGM Set Vol. 1<br>Monster Figure: Nergigante<br>Monster Figure: Velkhana"
    }
  ]
];

export const DLC_DELUXE: DlcPack[] = [
  {
    "image": "/assets/images/topics/dlc/img_pack01.jpg",
    "title": "Deluxe Kit",
    "fee": true,
    "priceHtml": "",
    "contents": "Silver Knight Layered Armor Set<br>Gestures: Flourish, Pledge, Genuflect<br>Sticker Sets: Research Commission Set 2, Pearlspring Macaque Set<br>Face Paint: Rising Dragon<br>Hairstyle: Flowing<br>Room Decor: \"Traditional Room\" Room Theme and \"Traditional Decor\""
  }
];

export const DLC_STYLE: DlcPack[] = [
  {
    "image": "/assets/images/topics/dlc/img_style01.jpg",
    "title": "",
    "fee": true,
    "priceHtml": "Character &amp; Palico Edit Voucher: Single Voucher<br>Character &amp; Palico Edit Voucher: Two-Voucher Pack<br>Character &amp; Palico Edit Voucher: Three-Voucher Pack<br><div class=\"note\"> This voucher allows you to edit your hunter character and Palico's appearance once. Use a voucher at the save data select screen to edit the appearance and gender of an existing hunter and the appearance of that hunter's Palico. Please note that the name of your hunter and Palico cannot be changed. <ul> <li>- Can only be purchased once.</li> <li>- One edit (changing an existing hunter's gender and/or appearance, and changing their Palico's appearance) consumes one voucher.</li> <li>- You can edit hair, eyebrow color, facial hair, makeup, and clothing from the Item Box in your living quarters without using a voucher.</li> </ul> </div> Palico Edit Voucher: Single Voucher<br>Palico Edit Voucher: Two-Voucher Pack<br>Palico Edit Voucher: Three-Voucher Pack<br><div class=\"note\">This voucher allows you to edit a Palico's appearance one time. Use a voucher at the save data select screen to edit the appearance of an existing Palico. Please note that the name of your Palico cannot be changed. <ul> <li>- Can only be purchased once.</li> <li>- Can be used to edit your Palico once (one edit will consume this voucher).</li> </ul> </div>",
    "contents": ""
  }
];

export const DLC_ITEMS: Record<string, DlcItem[]> = {
  "pose": [
    {
      "image": "/assets/images/topics/dlc/img_pose03.jpg",
      "title": "Pose Set: Weapon Pose (3)",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_gesture01.jpg",
      "title": "Pose Set: Crouching",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_gesture02.jpg",
      "title": "Pose Set: Unique",
      "fee": true
    }
  ],
  "gesture": [
    {
      "image": "/assets/images/topics/dlc/img_gesture03.jpg",
      "title": "MHW:I Gesture Pack: Swag Dance Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_gesture04.jpg",
      "title": "MHW:I Gesture Pack: Clean Dance Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_gesture05.jpg",
      "title": "MHW:I Gesture Pack: Hype Up Set",
      "fee": false
    }
  ],
  "stamp": [
    {
      "image": "/assets/images/topics/dlc/img_stamp06.jpg",
      "title": "Sticker Set: Friendly Greetings Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_stamp05.jpg",
      "title": "Sticker Set: Lynian Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_stamp04.jpg",
      "title": "Sticker Set: Raccoon City Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_stamp03.jpg",
      "title": "Sticker Set: Iceborne Monsters Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_stamp01.jpg",
      "title": "Sticker Set: Hunter Items Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_stamp02.jpg",
      "title": "Sticker Set: Monster Statuses Set",
      "fee": true
    }
  ],
  "hairstyle": [
    {
      "image": "/assets/images/topics/dlc/img_hair18.jpg",
      "title": "Hairstyle: Half Ponytail",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair19.jpg",
      "title": "Hairstyle: Fluffy Mop",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair20.jpg",
      "title": "Hairstyle: Rath-a-like",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair21.jpg",
      "title": "Hairstyle: Wandering Samurai",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair11.jpg",
      "title": "Hairstyle: Commander",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair12.jpg",
      "title": "Hairstyle: Excitable A-Lister",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair13.jpg",
      "title": "Hairstyle: Analytics Director",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair14.jpg",
      "title": "Hairstyle: The Seeker",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair15.jpg",
      "title": "Hairstyle: Serious Handler",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair16.jpg",
      "title": "Hairstyle: Third Fleet Master",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair17.jpg",
      "title": "Hairstyle: The Tracker",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_hair06.jpg",
      "title": "Hairstyle: Semi-long Up",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair07.jpg",
      "title": "Hairstyle: Great Mohawk",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair08.jpg",
      "title": "Hairstyle: Pleasant Ponytail",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair09.jpg",
      "title": "Hairstyle: Short Bob",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair10.jpg",
      "title": "Hairstyle: Long & Wavy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair01.jpg",
      "title": "Hairstyle: Wild Pompadour",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair02.jpg",
      "title": "Hairstyle: Mysterious Samurai",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair03.jpg",
      "title": "Hairstyle: Artful Buzz",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair04.jpg",
      "title": "Hairstyle: Hime Cut",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_hair05.jpg",
      "title": "Hairstyle: Light & Wavy",
      "fee": true
    }
  ],
  "costume": [
    {
      "image": "/assets/images/topics/dlc/img_costume08.jpg",
      "title": "The Handler's Cute Demoness Costume",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume06.jpg",
      "title": "The Handler's Festive Samba Costume",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume05.jpg",
      "title": "The Handler's Rose Vestido",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume04.jpg",
      "title": "The Handler's Techno Handler Costume",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume03.jpg",
      "title": "The Handler's Graceful Short Dress",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume02.jpg",
      "title": "The Handler's Tyrant Costume",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_costume01.jpg",
      "title": "The Handler's Kokoto Gal's Costume",
      "fee": true
    }
  ],
  "charm": [
    {
      "image": "/assets/images/topics/dlc/img_charm52.jpg",
      "title": "Pendant: MH Riders - Kirin",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_charm51.jpg",
      "title": "Pendant: Velkhana Snow Talisman",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm47.jpg",
      "title": "Pendant: Super-8 Mini (Player 1)",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_charm48.jpg",
      "title": "Pendant: Super-8 Mini (Player 2)",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_charm42.jpg",
      "title": "Pendant: Meowscular Gains Chain",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm43.jpg",
      "title": "Pendant: Mechanical Gold Watch",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm44.jpg",
      "title": "Pendant: Mechanical Silver Watch",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm45.jpg",
      "title": "Pendant: Blazing Glavenus Candle",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm46.jpg",
      "title": "Pendant: Shocked Kulu-Ya-Ku",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm49.jpg",
      "title": "Pendant: Heavenly Hog",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm50.jpg",
      "title": "Pendant: Beelzeboar",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm32.jpg",
      "title": "Pendant: Gold Heavenly Dragon",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm33.jpg",
      "title": "Pendant: Silver Heavenly Dragon",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm34.jpg",
      "title": "Pendant: Ruby Crystal Knife",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm35.jpg",
      "title": "Pendant: Amber Crystal Knife",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm36.jpg",
      "title": "Pendant: Azure Crystal Knife",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm37.jpg",
      "title": "Pendant: Phantom Azure Butterflies",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm38.jpg",
      "title": "Pendant: Phantom Jade Butterflies",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm39.jpg",
      "title": "Pendant: Phantom Magenta Butterflies",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm40.jpg",
      "title": "Pendant: Fulgurbugs",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm41.jpg",
      "title": "Pendant: Dracophage Bugs",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm26.jpg",
      "title": "Pendant: Emerald Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm27.jpg",
      "title": "Pendant: Ruby Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm28.jpg",
      "title": "Pendant: Crystal Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm29.jpg",
      "title": "Pendant: Topaz Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm30.jpg",
      "title": "Pendant: Sapphire Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm31.jpg",
      "title": "Pendant: Rosegem Kulve Heart",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm15.jpg",
      "title": "Pendant: Pukei Strap",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm16.jpg",
      "title": "Pendant: Coral Pukei Strap",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm17.jpg",
      "title": "Pendant: Swinging Rajang",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm18.jpg",
      "title": "Pendant: Swinging Furious Rajang",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm19.jpg",
      "title": "Pendant: Strollin' Paolumu",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm20.jpg",
      "title": "Pendant: Strollin' Nightshade",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm21.jpg",
      "title": "Pendant: Flying Meduso",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm22.jpg",
      "title": "Pendant: Flying Meduso Colony",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm23.jpg",
      "title": "Pendant: Red Balloon",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm24.jpg",
      "title": "Pendant: Red & White Balloons",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm25.jpg",
      "title": "Pendant: Rainbow Balloons",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm01.jpg",
      "title": "Pendant: Stuffed Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm02.jpg",
      "title": "Pendant: Stuffed Melynx Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm03.jpg",
      "title": "Pendant: White Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm04.jpg",
      "title": "Pendant: Pink Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm05.jpg",
      "title": "Pendant: Grape Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm06.jpg",
      "title": "Pendant: Mint Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm07.jpg",
      "title": "Pendant: Orange Felyne Teddy",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm08.jpg",
      "title": "Pendant: Moly Pendant - Luck",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm09.jpg",
      "title": "Pendant: Moly Pendant - Health",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm10.jpg",
      "title": "Pendant: Moly Pendant - Safety",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm11.jpg",
      "title": "Pendant: Moly Pendant - Love",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm12.jpg",
      "title": "Pendant: Moly Pendant - Protection",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm13.jpg",
      "title": "Pendant: Moly Pendant - Passion",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_charm14.jpg",
      "title": "Pendant: Moly Pendant - Peace",
      "fee": true
    }
  ],
  "room": [
    {
      "image": "/assets/images/topics/dlc/img_room12.jpg",
      "title": "MHW:I Room Decor: Beotodus Skull",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room08.jpg",
      "title": "MHW:I Room Decor: Poogie Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room09.jpg",
      "title": "MHW:I Room Decor: Felyne Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room10.jpg",
      "title": "MHW:I Room Decor: Pukei-Pukei Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room11.jpg",
      "title": "MHW:I Room Decor: Boaboa Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room07.jpg",
      "title": "MHW:I Room Decor: Mini Model Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room06.jpg",
      "title": "MHW:I Room Decor: Lil' Bit of Glamour Decor Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room05.jpg",
      "title": "MHW:I Room Decor: Splendid Decor Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room04.jpg",
      "title": "MHW:I Room Decor: Lighting Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room03.jpg",
      "title": "MHW:I Room Decor: Intimate Decor Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room02.jpg",
      "title": "MHW:I Room Decor: Giant Stuffed Doll Set",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_room01.jpg",
      "title": "MHW:I Room Decor: Cute Decor Set",
      "fee": true
    }
  ],
  "figure": [
    {
      "image": "/assets/images/topics/dlc/img_figure53.jpg",
      "title": "Monster Figure Bundle 5",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure44.jpg",
      "title": "MHW:I Monster Figure: Lunastra",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure45.jpg",
      "title": "MHW:I Monster Figure: Uragaan",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure46.jpg",
      "title": "MHW:I Monster Figure: Kulve Taroth",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure47.jpg",
      "title": "MHW:I Monster Figure: Bazelgeuse",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure48.jpg",
      "title": "MHW:I Monster Figure: Deviljho",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure49.jpg",
      "title": "MHW:I Monster Figure: Shara Ishvalda 1",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure50.jpg",
      "title": "MHW:I Monster Figure: Shara Ishvalda 2",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure51.jpg",
      "title": "MHW:I Monster Figure: Alatreon",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure52.jpg",
      "title": "MHW:I Monster Figure: Fatalis",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure54.jpg",
      "title": "Monster Figure Bundle 4",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure33.jpg",
      "title": "MHW:I Monster Figure: Tigrex",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure34.jpg",
      "title": "MHW:I Monster Figure: Odogaron",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure35.jpg",
      "title": "MHW:I Monster Figure: Radobaan",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure36.jpg",
      "title": "MHW:I Monster Figure: Rajang",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure37.jpg",
      "title": "MHW:I Monster Figure: Kirin",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure38.jpg",
      "title": "MHW:I Monster Figure: Vaal Hazak",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure39.jpg",
      "title": "MHW:I Monster Figure: Teostra",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure40.jpg",
      "title": "MHW:I Monster Figure: Gajalakas & King Gajalaka",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure41.jpg",
      "title": "MHW:I Monster Figure: Brachydios",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure42.jpg",
      "title": "MHW:I Monster Figure: Lavasioth",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure43.jpg",
      "title": "MHW:I Monster Figure: Downy Crakes & Aptonoths",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure55.jpg",
      "title": "Monster Figure Bundle 3",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure21.jpg",
      "title": "MHW:I Monster Figure: Zinogre",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure22.jpg",
      "title": "MHW:I Monster Figure: Yian Garuga",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure23.jpg",
      "title": "MHW:I Monster Figure: Girros & Great Girros",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure24.jpg",
      "title": "MHW:I Monster Figure: Namielle",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure25.jpg",
      "title": "MHW:I Monster Figure: Paolumu",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure26.jpg",
      "title": "MHW:I Monster Figure: Tzitzi-Ya-Ku",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure27.jpg",
      "title": "MHW:I Monster Figure: Jyuratodus",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure28.jpg",
      "title": "MHW:I Monster Figure: Barroth",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure29.jpg",
      "title": "MHW:I Monster Figure: Diablos",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure30.jpg",
      "title": "MHW:I Monster Figure: Safi'jiiva",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure31.jpg",
      "title": "MHW:I Monster Figure: Xeno'jiiva",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure32.jpg",
      "title": "MHW:I Monster Figure: Wulg",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure20.jpg",
      "title": "MHW:I Special Monster Figure: Grand Appreciation Fest",
      "fee": false
    },
    {
      "image": "/assets/images/topics/dlc/img_figure56.jpg",
      "title": "Monster Figure Bundle 2",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure11.jpg",
      "title": "MHW:I Monster Figure: Velkhana",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure12.jpg",
      "title": "MHW:I Monster Figure: Legiana",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure13.jpg",
      "title": "MHW:I Monster Figure: Beotodus",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure14.jpg",
      "title": "MHW:I Monster Figure: Nargacuga",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure15.jpg",
      "title": "MHW:I Monster Figure: Pukei-Pukei",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure16.jpg",
      "title": "MHW:I Monster Figure: Grimalkyne",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure17.jpg",
      "title": "MHW:I Monster Figure: Glavenus",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure18.jpg",
      "title": "MHW:I Monster Figure: Rathian",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure19.jpg",
      "title": "MHW:I Monster Figure: Kulu-Ya-Ku",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure57.jpg",
      "title": "Monster Figure Bundle 1",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure02.jpg",
      "title": "MHW:I Monster Figure: Nergigante",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure03.jpg",
      "title": "MHW:I Monster Figure: Kushala Daora",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure04.jpg",
      "title": "MHW:I Monster Figure: Dodogama",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure05.jpg",
      "title": "MHW:I Monster Figure: Rathalos",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure06.jpg",
      "title": "MHW:I Monster Figure: Anjanath",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure07.jpg",
      "title": "MHW:I Monster Figure: Tobi-Kadachi",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure08.jpg",
      "title": "MHW:I Monster Figure: Barioth",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure09.jpg",
      "title": "MHW:I Monster Figure: Banbaro",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure10.jpg",
      "title": "MHW:I Monster Figure: Boaboa",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_figure01.jpg",
      "title": "MHW:I Monster Figure: Great Jagras",
      "fee": false
    }
  ],
  "music": [
    {
      "image": "/assets/images/topics/dlc/img_music08.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 7",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music07.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 6",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music06.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 5",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music05.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 4",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music04.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 3",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music03.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 2",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music02.jpg",
      "title": "MHW:I Music Player: Raccoon City Collaboration - Black Impact",
      "fee": true
    },
    {
      "image": "/assets/images/topics/dlc/img_music01.jpg",
      "title": "MHW:I Music Player: Additional BGM Set Vol. 1",
      "fee": true
    }
  ]
};

export const DLC_STORE_LINKS: { label: string; href: string }[] = [
  {
    "label": "PlayStation&trade;Store",
    "href": "https://store.playstation.com/en-us/grid/UP0102-CUSA07713_00-0000000000000000/1?relationship=add-ons"
  },
  {
    "label": "XBOX Store",
    "href": "https://www.microsoft.com/en-us/search/shop/Games?q=+Iceborne"
  }
];
