import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "p-Home_Flex1_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex2_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex4_bpt": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "p-Home_Flex138_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex3_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex5_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex6_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex8_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex9_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex10_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex7_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex11_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex12_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex371_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex373_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex13_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex14_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex365_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex15_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex366_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex367_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex21_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex368_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex69_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex26_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex27_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex29_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex30_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex35_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex32_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex28_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex37_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex38_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex39_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex40_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex297_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_1_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex42_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_2_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex43_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex298_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_3_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex45_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_4_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex47_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex58_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex57_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex299_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_5_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex52_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_6_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex51_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex300_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_7_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex50_bpt": {
      "callbacks": {}
    },
    "p-Home_Product_Card_8_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex49_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex59_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex60_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex62_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex61_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex63_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex130_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex89_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex128_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex64_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex65_bpt": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "p-Home_Flex131_bpt": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "p-Home_Flex67_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex68_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex129_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex71_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex72_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex73_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex74_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex75_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex76_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex77_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex82_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex81_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex85_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex84_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex83_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex90_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex93_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex95_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex94_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex92_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex98_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex99_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex100_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex101_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex108_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex107_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex106_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex105_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex104_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex103_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex102_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex110_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex113_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex114_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex115_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex116_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex112_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex111_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex117_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex118_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex121_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex120_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex124_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex123_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex122_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex119_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex125_bpt": {
      "callbacks": {}
    },
    "p-Home_Flex127_bpt": {
      "callbacks": {}
    },
    "p-Home_Image2_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox6_bpt": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox1_bpt": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox2_bpt": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox4_bpt": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox3_bpt": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button2_bpt": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button1_bpt": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox9_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button4_bpt": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button3_bpt": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox8_bpt": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox7_bpt": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image5_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox10_bpt": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image10_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/l2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image6_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image197_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/l4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image198_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/l3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox11_bpt": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image11_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox12_bpt": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox13_bpt": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox14_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image195_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox384_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox382_bpt": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox383_bpt": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image17_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox31_bpt": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox30_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox32_bpt": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image196_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox386_bpt": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox385_bpt": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox387_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button18_bpt": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button17_bpt": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image19_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox36_bpt": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image20_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox38_bpt": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image25_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox43_bpt": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox40_bpt": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image22_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/7.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox44_bpt": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox45_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox46_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button11_bpt": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button12_bpt": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox47_bpt": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox48_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_1_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_1_bpt": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_1_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_1_bpt": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_2_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/8.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_2_bpt": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_2_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_2_bpt": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_3_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/9.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_3_bpt": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_3_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_3_bpt": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_4_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/10.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_4_bpt": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_4_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_4_bpt": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button14_bpt": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button13_bpt": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_5_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_5_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_5_bpt": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_5_bpt": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_6_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/12.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_6_bpt": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_6_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_6_bpt": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_7_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_7_bpt": {
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_7_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_7_bpt": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Image_8_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Name_8_bpt": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_About_8_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Product_Price_8_bpt": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox73_bpt": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox74_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.  Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button15_bpt": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button16_bpt": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image34_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox75_bpt": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox76_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox142_bpt": {
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image74_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/a.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox78_bpt": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox79_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Flex132_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Flex133_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Flex134_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image44_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image40_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox80_bpt": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox81_bpt": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image75_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox82_bpt": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox83_bpt": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image45_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox85_bpt": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox86_bpt": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox84_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image51_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox100_bpt": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox99_bpt": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image49_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox96_bpt": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox97_bpt": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image53_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox104_bpt": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox103_bpt": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image52_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/7.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox102_bpt": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox101_bpt": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox105_bpt": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox106_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image54_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox107_bpt": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image56_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/7.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox112_bpt": {
      "custom": {
        "text": "losangeles@restaurentex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image55_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox111_bpt": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Button21_bpt": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox113_bpt": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Input1_bpt": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "p-Home_Input2_bpt": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "p-Home_TextBox114_bpt": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Input9_bpt": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us ?"
      },
      "callbacks": {}
    },
    "p-Home_TextBox120_bpt": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Input6_bpt": {
      "custom": {
        "value": "",
        "placeholder": "Day and month"
      },
      "callbacks": {}
    },
    "p-Home_TextBox118_bpt": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Input5_bpt": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00PM"
      },
      "callbacks": {}
    },
    "p-Home_TextBox117_bpt": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox116_bpt": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Input4_bpt": {
      "custom": {
        "value": "",
        "placeholder": "(123) 456 - 789"
      },
      "callbacks": {}
    },
    "p-Home_Input3_bpt": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "p-Home_TextBox115_bpt": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image59_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image58_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/8.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image61_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/9.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image60_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/10.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image62_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image63_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox122_bpt": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox121_bpt": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image64_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox123_bpt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image65_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image66_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image69_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image68_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image67_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/b.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox124_bpt": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image72_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/9.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image73_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/10.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image70_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_Image71_bpt": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox125_bpt": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox130_bpt": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox132_bpt": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox131_bpt": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox129_bpt": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox128_bpt": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox126_bpt": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox127_bpt": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox139_bpt": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox138_bpt": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox141_bpt": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox136_bpt": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox140_bpt": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox137_bpt": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox135_bpt": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "p-Home_TextBox134_bpt": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
