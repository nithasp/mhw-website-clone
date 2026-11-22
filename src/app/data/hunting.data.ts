// AUTO-GENERATED from the original MHW Iceborne site content. Edit freely.

export interface Weapon {
  id: string;
  name: string;
  image: string;
  icon: string;
}

export interface HuntingBlock {
  images: string[];
  title: string;
  /** Description paragraphs (and optional grey info box) as trusted HTML */
  html: string;
}

export interface HuntingDetail {
  id: string;
  title: string;
  youtubeId: string;
  thumb: string;
  heading: string;
  blocks: HuntingBlock[];
}

export const CLUTCH_CLAW_THUMB: string = "/assets/images/hunting/btn_clutchclaw_01_img.jpg";

export const WEAPONS: Weapon[] = [
  {
    "id": "01",
    "name": "Great Sword",
    "image": "/assets/images/hunting/img_weapon_01.jpg",
    "icon": "/assets/images/hunting/icon_weapon_01.png"
  },
  {
    "id": "02",
    "name": "Long Sword",
    "image": "/assets/images/hunting/img_weapon_02.jpg",
    "icon": "/assets/images/hunting/icon_weapon_02.png"
  },
  {
    "id": "03",
    "name": "Sword & <br class=\"br_sp\">Shield",
    "image": "/assets/images/hunting/img_weapon_03.jpg",
    "icon": "/assets/images/hunting/icon_weapon_03.png"
  },
  {
    "id": "04",
    "name": "Dual Blades",
    "image": "/assets/images/hunting/img_weapon_04.jpg",
    "icon": "/assets/images/hunting/icon_weapon_04.png"
  },
  {
    "id": "05",
    "name": "Hammer",
    "image": "/assets/images/hunting/img_weapon_05.jpg",
    "icon": "/assets/images/hunting/icon_weapon_05.png"
  },
  {
    "id": "06",
    "name": "Hunting Horn",
    "image": "/assets/images/hunting/img_weapon_06.jpg",
    "icon": "/assets/images/hunting/icon_weapon_06.png"
  },
  {
    "id": "07",
    "name": "Lance",
    "image": "/assets/images/hunting/img_weapon_07.jpg",
    "icon": "/assets/images/hunting/icon_weapon_07.png"
  },
  {
    "id": "08",
    "name": "Gunlance",
    "image": "/assets/images/hunting/img_weapon_08.jpg",
    "icon": "/assets/images/hunting/icon_weapon_08.png"
  },
  {
    "id": "09",
    "name": "Switch <br class=\"br_sp\">Axe",
    "image": "/assets/images/hunting/img_weapon_09.jpg",
    "icon": "/assets/images/hunting/icon_weapon_09.png"
  },
  {
    "id": "10",
    "name": "Charge <br class=\"br_sp\">Blade",
    "image": "/assets/images/hunting/img_weapon_10.jpg",
    "icon": "/assets/images/hunting/icon_weapon_10.png"
  },
  {
    "id": "11",
    "name": "Insect Glaive",
    "image": "/assets/images/hunting/img_weapon_11.jpg",
    "icon": "/assets/images/hunting/icon_weapon_11.png"
  },
  {
    "id": "12",
    "name": "Bow",
    "image": "/assets/images/hunting/img_weapon_12.jpg",
    "icon": "/assets/images/hunting/icon_weapon_12.png"
  },
  {
    "id": "13",
    "name": "Light <br class=\"br_sp\">Bowgun",
    "image": "/assets/images/hunting/img_weapon_13.jpg",
    "icon": "/assets/images/hunting/icon_weapon_13.png"
  },
  {
    "id": "14",
    "name": "Heavy <br class=\"br_sp\">Bowgun",
    "image": "/assets/images/hunting/img_weapon_14.jpg",
    "icon": "/assets/images/hunting/icon_weapon_14.png"
  }
];

export const HUNTING_DETAILS: Record<string, HuntingDetail> = {
  "01": {
    "id": "01",
    "title": "Great Sword",
    "youtubeId": "uMf-I0URyjc",
    "thumb": "/assets/images/thumb/uMf-I0URyjc.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/greatsword_01.jpg"
        ],
        "title": "True Charged Slash (Power)",
        "html": "<p>If you connect the first strike of a True Charged Slash on a monster's softer, weaker parts, the second strike will be even more powerful.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/greatsword_02.jpg"
        ],
        "title": "Slinger Burst",
        "html": "<p>You can fire a slinger burst after an attack. Afterwards, you can combo into a True Charged Slash or Wide Slash, so a good strategy is to make a monster flinch with the slinger burst, and then follow up with a powerful attack.</p>"
      }
    ]
  },
  "02": {
    "id": "02",
    "title": "Long Sword",
    "youtubeId": "QtAw_WDk4-c",
    "thumb": "/assets/images/thumb/QtAw_WDk4-c.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/longsword_01.jpg"
        ],
        "title": "Special Sheathe",
        "html": "<p>When sheathing your weapon after an attack, you can now immediately draw into an Iai Slash or Iai Spirit Slash.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/longsword_02.jpg"
        ],
        "title": "Iai Slash",
        "html": "<p>Land attacks with Iai Slash to increase your Spirit Gauge. Time this against a monster's attack to fill your gauge faster. Minor attacks will not knock you out of this attack.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/longsword_03.jpg"
        ],
        "title": "Iai Spirit Slash",
        "html": "<p>Iai Spirit Slash is an extremely potent technique that consumes one Spirit Gauge color level. Time this against a monster's attack to consume no Spirit Gauge. Minor attacks will not knock you out of this attack.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/longsword_04.jpg"
        ],
        "title": "Slinger Burst",
        "html": "<p>You can use a slinger burst right after an Iai Slash. Use it, along with your Iai Slashes, to stagger monsters.</p>"
      }
    ]
  },
  "03": {
    "id": "03",
    "title": "Sword & Shield",
    "youtubeId": "XxpdCybU5f4",
    "thumb": "/assets/images/thumb/XxpdCybU5f4.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/swordshield_01.jpg"
        ],
        "title": "Perfect Rush",
        "html": "<p>A series of attacks that is very effective at inflicting status ailments. Press attack buttons with proper timing to do even more elemental and physical damage.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/swordshield_02.jpg"
        ],
        "title": "Claw Uppercut",
        "html": "<p>An aerial attack available when your weapon is unsheathed. Evade an enemy attack to jump into the air and attack with the clutch claw. If your attack hits, you will grab ahold of the monster.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/swordshield_03.jpg"
        ],
        "title": "Slinger Shots & Slinger Bursts",
        "html": "<p>As with normal slinger shots, Sword & Shield slinger bursts can be performed whenever your weapon is unsheathed by switching unsheathed slinger mode. Sheathing your weapon will switch you back to normal slinger mode. Finally, all weapons, regardless of type, will have access to slinger bursts even when moving.</p>"
      }
    ]
  },
  "04": {
    "id": "04",
    "title": "Dual Blades",
    "youtubeId": "1hxqeW4vDkg",
    "thumb": "/assets/images/thumb/1hxqeW4vDkg.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/dualblades_01.jpg"
        ],
        "title": "Evade Shot",
        "html": "<p>During Double Slash attacks, you can perform a slinger burst while evading. You can then follow up your evade with additional attacks--hopefully causing the monster to stagger.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/dualblades_02.jpg"
        ],
        "title": "Special Clutch Claw Attacks",
        "html": "<p>A special clutch claw attack is available following the second hit of a Double Roundslash while you are in Demon Mode. Connect with a large monster to grab ahold of it and then follow up with additional Roundslashes for even more punishment.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/dualblades_03.jpg"
        ],
        "title": "Spinning Rising Slash",
        "html": "<p>The spinning rising slash is possible via your clutch claw while in Demon Mode. It has the same properties as other attacks made while grappling a monster, making it ideal for damaging specific parts or causing certain items to drop.</p>"
      }
    ]
  },
  "05": {
    "id": "05",
    "title": "Hammer",
    "youtubeId": "6-SLArEURIk",
    "thumb": "/assets/images/thumb/6-SLArEURIk.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/hammer_01.jpg",
          "/assets/images/hunting/modal/hammer_02.jpg"
        ],
        "title": "Charge Attacks and the Clutch Claw",
        "html": "<p>You can now perform a clutch claw attack immediately following a Charged Upswing or Charged Big Bang. Connect with a large monster to grab ahold of it.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/hammer_03.jpg"
        ],
        "title": "Slinger Bursts",
        "html": "<p>You can also use slinger bursts while charging your hammer. They will not interfere with your charge, so use them to buy time until your attack is ready!</p>"
      }
    ]
  },
  "06": {
    "id": "06",
    "title": "Hunting Horn",
    "youtubeId": "pBIpciP2TdY",
    "thumb": "/assets/images/thumb/pBIpciP2TdY.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/huntinghorn_01.jpg",
          "/assets/images/hunting/modal/huntinghorn_02.jpg"
        ],
        "title": "Echo Attacks",
        "html": "<p>Echo attacks are available after a normal attack and will place an echo mark on the music staff.</p> <div class=\"modal_graybox\"> <h5>Echo Marks and Melody Effects</h5> <p>Performing a melody with an echo mark may also produce an echo bubble where the melody was played. Touching the echo bubble will impart special benefits. Additionally, you can also spawn an echo bubble by performing an encore with the same effect.</p> <dl> <dt> <em>Example Melody Effects</em> <span>Speed Boost + Evade Window Up</span> </dt> <dd> A melody effect that uses the echo mark. Players touching the echo bubble will increase their evade window for a period of time. Any players using a hunting horn will also get a speed boost. </dd> </dl> </div>"
      }
    ]
  },
  "07": {
    "id": "07",
    "title": "Lance",
    "youtubeId": "Uw-UVvrTx8M",
    "thumb": "/assets/images/thumb/Uw-UVvrTx8M.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/lance_01.jpg"
        ],
        "title": "Guard Shot",
        "html": "<p>A special guard that offers increased protection allowing you to fire a slinger burst more safely. You can also press a button to switch back to normal slinger mode.<br class=\"br_pc\">(You cannot move during a Guard Shot.)</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/lance_02.jpg"
        ],
        "title": "Counter Claw",
        "html": "<p>A special stance that you can take while in slinger burst mode. Though it consumes stamina while active, getting hit will allow you to grab, and potentially latch on to, the monster with your claw. If successful, you will gain Flinch Free for a short time.</p>"
      }
    ]
  },
  "08": {
    "id": "08",
    "title": "Gunlance",
    "youtubeId": "AW2R06Yzh9A",
    "thumb": "/assets/images/thumb/AW2R06Yzh9A.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/gunlance_01.jpg"
        ],
        "title": "Load Wyrmstake Blast",
        "html": "<p>While aiming the slinger with your weapon drawn, you can expend all of your slinger ammo to load the powerful Wyrmstake Blast. Once loaded, the attack will change depending on the amount and type of slinger ammo used.<br>(This attack requires slinger ammo, and all ammo will be used.)</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/gunlance_02.jpg"
        ],
        "title": "Wyrmstake Blast",
        "html": "<p>If a Wyrmstake Blast hits a monster, it will lodge itself in at the point of impact. Strike the stake once more with a Heavy Artillery attack to make it explode. Damage caused will vary depending on the strength of the heavy artillery used.</p>"
      }
    ]
  },
  "09": {
    "id": "09",
    "title": "Switch Axes",
    "youtubeId": "OXFRnZlSvpU",
    "thumb": "/assets/images/thumb/OXFRnZlSvpU.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/switchaxe_01.jpg"
        ],
        "title": "Power Axe Mode",
        "html": "<p>Axe: After a set number of Wild Swings, follow up with a Heavy Slam to activate Power Axe Mode. While active, your axe attacks will cause monsters to stagger more easily.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/switchaxe_02.jpg"
        ],
        "title": "Special Clutch Claw",
        "html": "<p>You can use your clutch claw during an Element Discharge. Connect with a large monster to grab ahold of it. The claw attack will also increase phial output, making it easier to go into an Amped State.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/switchaxe_04.jpg"
        ],
        "title": "Clutch Attacks and Zero Sum Discharge",
        "html": "<p>While in an Amped State, you can follow up a clutch claw grapple with a Zero Sum Discharge. Use your claw to get close, then unleash the pain.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/switchaxe_03.jpg"
        ],
        "title": "Slinger Burst",
        "html": "<p>Slinger bursts are possible after a number of axe attacks. You can also follow one up with an Axe: Morph Sweep.</p>"
      }
    ]
  },
  "10": {
    "id": "10",
    "title": "Charge Blade",
    "youtubeId": "fvojkJhX-nE",
    "thumb": "/assets/images/thumb/fvojkJhX-nE.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/chargeblade_01.jpg"
        ],
        "title": "Power Axe Mode",
        "html": "<p>Provided you have at least one phial filled, you can now use a Savage Axe Slash, while amped element discharge is readying, to activate Power Axe Mode. For a set time afterwards, axe attacks will be further enhanced depending on the type of phial you are using.<br>Power Element Phials: Enhances elemental damage of your axe attacks for a longer period of time.<br>Impact Phials: Enhances physical damage of your axe attacks for a short period of time.<br>Power Axe Mode will consume phials while active and, will end once all phials have been exhausted.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/chargeblade_02.jpg"
        ],
        "title": "Slinger Burst",
        "html": "<p>You can use a slinger burst while in axe mode after your attacks, or while guarding in sword mode. You cannot perform a slinger burst after an attack knocks you back significantly, but if you boost the charge blade's guard capabilities to prevent knockback, slinger bursts will become easier to perform.</p>"
      }
    ]
  },
  "11": {
    "id": "11",
    "title": "Insect Glaive",
    "youtubeId": "3vXXybMPZvU",
    "thumb": "/assets/images/thumb/3vXXybMPZvU.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/insectglaive_01.jpg"
        ],
        "title": "Kinsect Charge",
        "html": "<p>You can now use slinger ammo to enhance your Kinsect. Enhanced Kinsects can harvest up to two extracts, and extends the duration of some effects depending on the type of slinger ammo used.</p> <div class=\"modal_graybox\"> <h5>Kinsect Charge: Power</h5> <p class=\"margin__bottom\">Use slinger ammo drops from monsters to increase your Kinsect's attack power, while decreasing the cooldown between Kinsect powder deposits.</p> <h5>Kinsect Charge: Spirit</h5> <p>Use slinger ammo harvested from the field to increase your Kinsect's maximum stamina, while increasing the duration of their extracts.</p> </div>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/insectglaive_02.jpg"
        ],
        "title": "Mid-air Claw Attack",
        "html": "<p>This attack is available mid-jump. Connect with a large monster to grab ahold of it.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/insectglaive_03.jpg"
        ],
        "title": "Descending Thrust",
        "html": "<p>An attack during a vault that continuously hits a target while you descend. The landing attack will mark the part of the monster it hits. If your Kinsect is on your arm while you perform this attack, it will perform a follow up attack after the landing attack.</p>"
      }
    ]
  },
  "12": {
    "id": "12",
    "title": "Bow",
    "youtubeId": "1syjq0TgpHk",
    "thumb": "/assets/images/thumb/1syjq0TgpHk.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/bow_01.jpg"
        ],
        "title": "Thousand Dragons",
        "html": "<p>A powerful, short range attack, it consumes all of your slinger ammo upon use. (Using this attack with slinger ammo will lower its potency.)</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/bow_02.jpg"
        ],
        "title": "Aiming the Slinger (Unsheathed)",
        "html": "<p>You can switch aiming modes, between your main weapon and your slinger, with the press of a button. While aiming with your slinger, you can access both your clutch claw and your normal slinger ammo. Press a button again to switch back to your bow.</p>"
      }
    ]
  },
  "13": {
    "id": "13",
    "title": "Light Bowgun",
    "youtubeId": "DDQoQ0clGEU",
    "thumb": "/assets/images/thumb/DDQoQ0clGEU.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/lightbowgun_01.jpg"
        ],
        "title": "Evading Reload",
        "html": "<p>This ability is enabled by the Evading Reload mod. When evading, you will reload one round for each Evading Reload mod you have equipped. This especially useful when paired with bowguns that have long reload times or can only hold low amounts of ammo.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/lightbowgun_02.jpg"
        ],
        "title": "Wyvernblast Counter",
        "html": "<p>This ability is enabled by the Wyvernblast Mod. Your Wyvernblasts will become forward firing mines that detonate when attacked. Though they suffer from heavy recoil, and are only active for a short period of time, the damage they inflict is very impressive. (Can only equip 1.)</p>"
      }
    ]
  },
  "14": {
    "id": "14",
    "title": "Heavy Bowgun",
    "youtubeId": "yivwMe17Rec",
    "thumb": "/assets/images/thumb/yivwMe17Rec.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/heavybowgun_01.jpg"
        ],
        "title": "Special Scope",
        "html": "<p>Equip a special scope to enable an enhanced aiming mode. When active, the targeting reticule will change and turn orange to indicate when you are in Super Critical Range for increased damage.</p> <div class=\"modal_graybox\"> <h5>Other New (Heavy Bowgun) Mods</h5> <dl> <dt> <span>Wyvernheart</span> </dt> <dd> Increases Wyvernheart power for each successive round that hits a monster. (Can only equip 1.) </dd> </dl> <dl> <dt> <span>Wyvernsnipe</span> </dt> <dd> Wyvernsnipe rounds no longer penetrate, but become extremely effective against weak points. (Can only equip 1.) </dd> </dl> </div>"
      }
    ]
  },
  "clutchclaw": {
    "id": "clutchclaw",
    "title": "The Clutch Claw",
    "youtubeId": "zYTuPWYytBQ",
    "thumb": "/assets/images/thumb/zYTuPWYytBQ.jpg",
    "heading": "New Actions and Combos",
    "blocks": [
      {
        "images": [
          "/assets/images/hunting/modal/clutchclaw_01.jpg",
          "/assets/images/hunting/modal/clutchclaw_02.jpg"
        ],
        "title": "Weapon Attacks While Grappling",
        "html": "<p>These are special attacks you can perform while grappled onto a monster. The parts you attack become wounded, making them more susceptible to damage for a period of time, and less likely to deflect your attacks. This should prove very useful when attacking tough parts of the monster, or if you're looking to break specific parts.</p> <div class=\"modal_graybox\"> <h5>Characteristics for Each Weapon</h5> <p>Weapon types play an effect on how easily the grappled weapon attacks wound a monster's body part.</p> <dl> <dt> <span>—Great Sword, Hammer, Hunting Horn, Lance, Switch Axe, Charge Blade, Heavy Bowgun—</span> </dt> <dd> It's easier to wound monsters with these weapons, so rely on them when you want to make monsters more susceptible to damage. </dd> </dl> <dl> <dt> <span>—Sword & Shield, Dual Blades, Long Sword, Gunlance, Insect Glaive, Bow, Light Bowgun—</span> </dt> <dd> These weapons' grappled attacks can be relied to make the monsters drop slinger ammo for you to use, and also still do slight wound damage on monsters. These weapons are great for when you want to rely on the wide variety of combat offered by slinger mechanics. </dd> </dl> </div>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/clutchclaw_03.jpg"
        ],
        "title": "Claw Attacks While Grappling",
        "html": "<p>Claw attacks you make when grappled onto a monster's head will change the direction that the monster's facing.</p>"
      },
      {
        "images": [
          "/assets/images/hunting/modal/clutchclaw_04.jpg",
          "/assets/images/hunting/modal/clutchclaw_05.jpg"
        ],
        "title": "Flinch Shot",
        "html": "<p>The Flinch Shot is a special move you can perform while grappled onto a monster's head. The Flinch Shot shoots all of your slinger ammo into the monster, sending it flying in the direction it's facing. If the monster hits a wall, it will topple, damaging certain parts of the monster, as well (and increased damage for parts that are wounded).</p>"
      }
    ]
  }
};
