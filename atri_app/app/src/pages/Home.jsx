import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { usep-Home_Flex1_bptCb, usep-Home_Flex2_bptCb, usep-Home_Flex4_bptCb, useFlex54Cb, usep-Home_Flex138_bptCb, usep-Home_Flex3_bptCb, usep-Home_Flex5_bptCb, usep-Home_Flex6_bptCb, usep-Home_Flex8_bptCb, usep-Home_Flex9_bptCb, usep-Home_Flex10_bptCb, usep-Home_Flex7_bptCb, usep-Home_Flex11_bptCb, usep-Home_Flex12_bptCb, usep-Home_Flex371_bptCb, usep-Home_Flex373_bptCb, usep-Home_Flex13_bptCb, usep-Home_Flex14_bptCb, usep-Home_Flex365_bptCb, usep-Home_Flex15_bptCb, usep-Home_Flex366_bptCb, usep-Home_Flex367_bptCb, usep-Home_Flex21_bptCb, usep-Home_Flex368_bptCb, usep-Home_Flex69_bptCb, usep-Home_Flex26_bptCb, usep-Home_Flex27_bptCb, usep-Home_Flex29_bptCb, usep-Home_Flex30_bptCb, usep-Home_Flex35_bptCb, usep-Home_Flex32_bptCb, usep-Home_Flex28_bptCb, usep-Home_Flex37_bptCb, usep-Home_Flex38_bptCb, usep-Home_Flex39_bptCb, usep-Home_Flex40_bptCb, usep-Home_Flex297_bptCb, usep-Home_Product_Card_1_bptCb, usep-Home_Flex42_bptCb, usep-Home_Product_Card_2_bptCb, usep-Home_Flex43_bptCb, usep-Home_Flex298_bptCb, usep-Home_Product_Card_3_bptCb, usep-Home_Flex45_bptCb, usep-Home_Product_Card_4_bptCb, usep-Home_Flex47_bptCb, usep-Home_Flex58_bptCb, usep-Home_Flex57_bptCb, usep-Home_Flex299_bptCb, usep-Home_Product_Card_5_bptCb, usep-Home_Flex52_bptCb, usep-Home_Product_Card_6_bptCb, usep-Home_Flex51_bptCb, usep-Home_Flex300_bptCb, usep-Home_Product_Card_7_bptCb, usep-Home_Flex50_bptCb, usep-Home_Product_Card_8_bptCb, usep-Home_Flex49_bptCb, usep-Home_Flex59_bptCb, usep-Home_Flex60_bptCb, usep-Home_Flex62_bptCb, usep-Home_Flex61_bptCb, usep-Home_Flex63_bptCb, usep-Home_Flex130_bptCb, usep-Home_Flex89_bptCb, usep-Home_Flex128_bptCb, usep-Home_Flex64_bptCb, usep-Home_Flex65_bptCb, useFlex123Cb, useFlex126Cb, useFlex127Cb, usep-Home_Flex131_bptCb, useFlex130Cb, usep-Home_Flex67_bptCb, usep-Home_Flex68_bptCb, usep-Home_Flex129_bptCb, usep-Home_Flex69_bptCb, usep-Home_Flex71_bptCb, usep-Home_Flex72_bptCb, usep-Home_Flex73_bptCb, usep-Home_Flex74_bptCb, usep-Home_Flex75_bptCb, usep-Home_Flex76_bptCb, usep-Home_Flex77_bptCb, usep-Home_Flex82_bptCb, usep-Home_Flex81_bptCb, usep-Home_Flex85_bptCb, usep-Home_Flex84_bptCb, usep-Home_Flex83_bptCb, usep-Home_Flex90_bptCb, usep-Home_Flex90_bptCb, usep-Home_Flex93_bptCb, usep-Home_Flex95_bptCb, usep-Home_Flex94_bptCb, usep-Home_Flex92_bptCb, usep-Home_Flex98_bptCb, usep-Home_Flex99_bptCb, usep-Home_Flex100_bptCb, usep-Home_Flex101_bptCb, usep-Home_Flex108_bptCb, usep-Home_Flex107_bptCb, usep-Home_Flex106_bptCb, usep-Home_Flex105_bptCb, usep-Home_Flex104_bptCb, usep-Home_Flex103_bptCb, usep-Home_Flex102_bptCb, usep-Home_Flex110_bptCb, usep-Home_Flex113_bptCb, usep-Home_Flex114_bptCb, usep-Home_Flex115_bptCb, usep-Home_Flex116_bptCb, usep-Home_Flex112_bptCb, usep-Home_Flex111_bptCb, usep-Home_Flex117_bptCb, usep-Home_Flex118_bptCb, usep-Home_Flex121_bptCb, usep-Home_Flex120_bptCb, usep-Home_Flex124_bptCb, usep-Home_Flex123_bptCb, usep-Home_Flex122_bptCb, usep-Home_Flex119_bptCb, usep-Home_Flex125_bptCb, usep-Home_Flex127_bptCb, usep-Home_Image2_bptCb, usep-Home_TextBox6_bptCb, usep-Home_TextBox1_bptCb, usep-Home_TextBox2_bptCb, usep-Home_TextBox4_bptCb, usep-Home_TextBox3_bptCb, usep-Home_Button2_bptCb, usep-Home_Button1_bptCb, usep-Home_TextBox9_bptCb, usep-Home_Button4_bptCb, usep-Home_Button3_bptCb, usep-Home_TextBox8_bptCb, usep-Home_TextBox7_bptCb, usep-Home_Image5_bptCb, usep-Home_TextBox10_bptCb, usep-Home_Image10_bptCb, usep-Home_Image6_bptCb, usep-Home_Image197_bptCb, usep-Home_Image198_bptCb, usep-Home_TextBox11_bptCb, usep-Home_Image11_bptCb, usep-Home_TextBox12_bptCb, usep-Home_TextBox13_bptCb, usep-Home_TextBox14_bptCb, usep-Home_Image195_bptCb, usep-Home_TextBox384_bptCb, usep-Home_TextBox382_bptCb, usep-Home_TextBox383_bptCb, usep-Home_Image17_bptCb, usep-Home_TextBox31_bptCb, usep-Home_TextBox30_bptCb, usep-Home_TextBox32_bptCb, usep-Home_Image196_bptCb, usep-Home_TextBox386_bptCb, usep-Home_TextBox385_bptCb, usep-Home_TextBox387_bptCb, usep-Home_Button18_bptCb, usep-Home_Button17_bptCb, usep-Home_Image19_bptCb, usep-Home_TextBox36_bptCb, usep-Home_Image20_bptCb, usep-Home_TextBox38_bptCb, usep-Home_Image25_bptCb, usep-Home_TextBox43_bptCb, usep-Home_TextBox40_bptCb, usep-Home_Image22_bptCb, usep-Home_TextBox44_bptCb, usep-Home_TextBox45_bptCb, usep-Home_TextBox46_bptCb, usep-Home_Button11_bptCb, usep-Home_Button12_bptCb, usep-Home_TextBox47_bptCb, usep-Home_TextBox48_bptCb, usep-Home_Product_Image_1_bptCb, usep-Home_Product_Name_1_bptCb, usep-Home_Product_About_1_bptCb, usep-Home_Product_Price_1_bptCb, usep-Home_Product_Image_2_bptCb, usep-Home_Product_Name_2_bptCb, usep-Home_Product_About_2_bptCb, usep-Home_Product_Price_2_bptCb, usep-Home_Product_Image_3_bptCb, usep-Home_Product_Name_3_bptCb, usep-Home_Product_About_3_bptCb, usep-Home_Product_Price_3_bptCb, usep-Home_Product_Image_4_bptCb, usep-Home_Product_Name_4_bptCb, usep-Home_Product_About_4_bptCb, usep-Home_Product_Price_4_bptCb, usep-Home_Button14_bptCb, usep-Home_Button13_bptCb, usep-Home_Product_Image_5_bptCb, usep-Home_Product_About_5_bptCb, usep-Home_Product_Name_5_bptCb, usep-Home_Product_Price_5_bptCb, usep-Home_Product_Image_6_bptCb, usep-Home_Product_Name_6_bptCb, usep-Home_Product_About_6_bptCb, usep-Home_Product_Price_6_bptCb, usep-Home_Product_Image_7_bptCb, usep-Home_Product_Name_7_bptCb, usep-Home_Product_About_7_bptCb, usep-Home_Product_Price_7_bptCb, usep-Home_Product_Image_8_bptCb, usep-Home_Product_Name_8_bptCb, usep-Home_Product_About_8_bptCb, usep-Home_Product_Price_8_bptCb, usep-Home_TextBox73_bptCb, usep-Home_TextBox74_bptCb, usep-Home_Button15_bptCb, usep-Home_Button16_bptCb, usep-Home_Image34_bptCb, usep-Home_TextBox75_bptCb, usep-Home_TextBox76_bptCb, usep-Home_TextBox142_bptCb, usep-Home_Image74_bptCb, usep-Home_TextBox78_bptCb, usep-Home_TextBox79_bptCb, usep-Home_Flex132_bptCb, usep-Home_Flex133_bptCb, usep-Home_Flex134_bptCb, usep-Home_Image44_bptCb, usep-Home_Flex132_bptCb, usep-Home_Image40_bptCb, usep-Home_TextBox80_bptCb, usep-Home_TextBox81_bptCb, usep-Home_Image75_bptCb, usep-Home_Button18_bptCb, usep-Home_Button17_bptCb, usep-Home_TextBox82_bptCb, usep-Home_TextBox83_bptCb, usep-Home_Image45_bptCb, usep-Home_TextBox85_bptCb, usep-Home_TextBox86_bptCb, usep-Home_TextBox84_bptCb, usep-Home_Image51_bptCb, usep-Home_TextBox100_bptCb, usep-Home_TextBox99_bptCb, usep-Home_Image49_bptCb, usep-Home_TextBox96_bptCb, usep-Home_TextBox97_bptCb, usep-Home_Image53_bptCb, usep-Home_TextBox104_bptCb, usep-Home_TextBox103_bptCb, usep-Home_Image52_bptCb, usep-Home_TextBox102_bptCb, usep-Home_TextBox101_bptCb, usep-Home_TextBox105_bptCb, usep-Home_TextBox106_bptCb, usep-Home_Image54_bptCb, usep-Home_TextBox107_bptCb, usep-Home_Image56_bptCb, usep-Home_TextBox112_bptCb, usep-Home_Image55_bptCb, usep-Home_TextBox111_bptCb, usep-Home_Button21_bptCb, usep-Home_TextBox113_bptCb, usep-Home_Input1_bptCb, usep-Home_Input2_bptCb, usep-Home_TextBox114_bptCb, usep-Home_Input9_bptCb, usep-Home_TextBox120_bptCb, usep-Home_Input6_bptCb, usep-Home_TextBox118_bptCb, usep-Home_Input5_bptCb, usep-Home_TextBox117_bptCb, usep-Home_TextBox116_bptCb, usep-Home_Input4_bptCb, usep-Home_Input3_bptCb, usep-Home_TextBox115_bptCb, usep-Home_Image59_bptCb, usep-Home_Image58_bptCb, usep-Home_Image61_bptCb, usep-Home_Image60_bptCb, usep-Home_Image62_bptCb, usep-Home_Image63_bptCb, usep-Home_TextBox122_bptCb, usep-Home_TextBox121_bptCb, usep-Home_Image64_bptCb, usep-Home_TextBox123_bptCb, usep-Home_Image65_bptCb, usep-Home_Image66_bptCb, usep-Home_Image69_bptCb, usep-Home_Image68_bptCb, usep-Home_Image67_bptCb, usep-Home_TextBox124_bptCb, usep-Home_Image72_bptCb, usep-Home_Image73_bptCb, usep-Home_Image70_bptCb, usep-Home_Image71_bptCb, usep-Home_TextBox125_bptCb, usep-Home_TextBox130_bptCb, usep-Home_TextBox132_bptCb, usep-Home_TextBox131_bptCb, usep-Home_TextBox129_bptCb, usep-Home_TextBox128_bptCb, usep-Home_TextBox126_bptCb, usep-Home_TextBox127_bptCb, usep-Home_TextBox139_bptCb, usep-Home_TextBox138_bptCb, usep-Home_TextBox141_bptCb, usep-Home_TextBox136_bptCb, usep-Home_TextBox140_bptCb, usep-Home_TextBox137_bptCb, usep-Home_TextBox135_bptCb, usep-Home_TextBox134_bptCb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const p-Home_Flex1_bptProps = useStore((state)=>state["Home"]["p-Home_Flex1_bpt"]);
const p-Home_Flex1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex1_bpt"]);
const p-Home_Flex1_bptCb = usep-Home_Flex1_bptCb()
const p-Home_Flex2_bptProps = useStore((state)=>state["Home"]["p-Home_Flex2_bpt"]);
const p-Home_Flex2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex2_bpt"]);
const p-Home_Flex2_bptCb = usep-Home_Flex2_bptCb()
const p-Home_Flex4_bptProps = useStore((state)=>state["Home"]["p-Home_Flex4_bpt"]);
const p-Home_Flex4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex4_bpt"]);
const p-Home_Flex4_bptCb = usep-Home_Flex4_bptCb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const p-Home_Flex138_bptProps = useStore((state)=>state["Home"]["p-Home_Flex138_bpt"]);
const p-Home_Flex138_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex138_bpt"]);
const p-Home_Flex138_bptCb = usep-Home_Flex138_bptCb()
const p-Home_Flex3_bptProps = useStore((state)=>state["Home"]["p-Home_Flex3_bpt"]);
const p-Home_Flex3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex3_bpt"]);
const p-Home_Flex3_bptCb = usep-Home_Flex3_bptCb()
const p-Home_Flex5_bptProps = useStore((state)=>state["Home"]["p-Home_Flex5_bpt"]);
const p-Home_Flex5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex5_bpt"]);
const p-Home_Flex5_bptCb = usep-Home_Flex5_bptCb()
const p-Home_Flex6_bptProps = useStore((state)=>state["Home"]["p-Home_Flex6_bpt"]);
const p-Home_Flex6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex6_bpt"]);
const p-Home_Flex6_bptCb = usep-Home_Flex6_bptCb()
const p-Home_Flex8_bptProps = useStore((state)=>state["Home"]["p-Home_Flex8_bpt"]);
const p-Home_Flex8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex8_bpt"]);
const p-Home_Flex8_bptCb = usep-Home_Flex8_bptCb()
const p-Home_Flex9_bptProps = useStore((state)=>state["Home"]["p-Home_Flex9_bpt"]);
const p-Home_Flex9_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex9_bpt"]);
const p-Home_Flex9_bptCb = usep-Home_Flex9_bptCb()
const p-Home_Flex10_bptProps = useStore((state)=>state["Home"]["p-Home_Flex10_bpt"]);
const p-Home_Flex10_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex10_bpt"]);
const p-Home_Flex10_bptCb = usep-Home_Flex10_bptCb()
const p-Home_Flex7_bptProps = useStore((state)=>state["Home"]["p-Home_Flex7_bpt"]);
const p-Home_Flex7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex7_bpt"]);
const p-Home_Flex7_bptCb = usep-Home_Flex7_bptCb()
const p-Home_Flex11_bptProps = useStore((state)=>state["Home"]["p-Home_Flex11_bpt"]);
const p-Home_Flex11_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex11_bpt"]);
const p-Home_Flex11_bptCb = usep-Home_Flex11_bptCb()
const p-Home_Flex12_bptProps = useStore((state)=>state["Home"]["p-Home_Flex12_bpt"]);
const p-Home_Flex12_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex12_bpt"]);
const p-Home_Flex12_bptCb = usep-Home_Flex12_bptCb()
const p-Home_Flex371_bptProps = useStore((state)=>state["Home"]["p-Home_Flex371_bpt"]);
const p-Home_Flex371_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex371_bpt"]);
const p-Home_Flex371_bptCb = usep-Home_Flex371_bptCb()
const p-Home_Flex373_bptProps = useStore((state)=>state["Home"]["p-Home_Flex373_bpt"]);
const p-Home_Flex373_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex373_bpt"]);
const p-Home_Flex373_bptCb = usep-Home_Flex373_bptCb()
const p-Home_Flex13_bptProps = useStore((state)=>state["Home"]["p-Home_Flex13_bpt"]);
const p-Home_Flex13_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex13_bpt"]);
const p-Home_Flex13_bptCb = usep-Home_Flex13_bptCb()
const p-Home_Flex14_bptProps = useStore((state)=>state["Home"]["p-Home_Flex14_bpt"]);
const p-Home_Flex14_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex14_bpt"]);
const p-Home_Flex14_bptCb = usep-Home_Flex14_bptCb()
const p-Home_Flex365_bptProps = useStore((state)=>state["Home"]["p-Home_Flex365_bpt"]);
const p-Home_Flex365_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex365_bpt"]);
const p-Home_Flex365_bptCb = usep-Home_Flex365_bptCb()
const p-Home_Flex15_bptProps = useStore((state)=>state["Home"]["p-Home_Flex15_bpt"]);
const p-Home_Flex15_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex15_bpt"]);
const p-Home_Flex15_bptCb = usep-Home_Flex15_bptCb()
const p-Home_Flex366_bptProps = useStore((state)=>state["Home"]["p-Home_Flex366_bpt"]);
const p-Home_Flex366_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex366_bpt"]);
const p-Home_Flex366_bptCb = usep-Home_Flex366_bptCb()
const p-Home_Flex367_bptProps = useStore((state)=>state["Home"]["p-Home_Flex367_bpt"]);
const p-Home_Flex367_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex367_bpt"]);
const p-Home_Flex367_bptCb = usep-Home_Flex367_bptCb()
const p-Home_Flex21_bptProps = useStore((state)=>state["Home"]["p-Home_Flex21_bpt"]);
const p-Home_Flex21_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex21_bpt"]);
const p-Home_Flex21_bptCb = usep-Home_Flex21_bptCb()
const p-Home_Flex368_bptProps = useStore((state)=>state["Home"]["p-Home_Flex368_bpt"]);
const p-Home_Flex368_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex368_bpt"]);
const p-Home_Flex368_bptCb = usep-Home_Flex368_bptCb()
const p-Home_Flex69_bptProps = useStore((state)=>state["Home"]["p-Home_Flex69_bpt"]);
const p-Home_Flex69_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex69_bpt"]);
const p-Home_Flex69_bptCb = usep-Home_Flex69_bptCb()
const p-Home_Flex26_bptProps = useStore((state)=>state["Home"]["p-Home_Flex26_bpt"]);
const p-Home_Flex26_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex26_bpt"]);
const p-Home_Flex26_bptCb = usep-Home_Flex26_bptCb()
const p-Home_Flex27_bptProps = useStore((state)=>state["Home"]["p-Home_Flex27_bpt"]);
const p-Home_Flex27_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex27_bpt"]);
const p-Home_Flex27_bptCb = usep-Home_Flex27_bptCb()
const p-Home_Flex29_bptProps = useStore((state)=>state["Home"]["p-Home_Flex29_bpt"]);
const p-Home_Flex29_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex29_bpt"]);
const p-Home_Flex29_bptCb = usep-Home_Flex29_bptCb()
const p-Home_Flex30_bptProps = useStore((state)=>state["Home"]["p-Home_Flex30_bpt"]);
const p-Home_Flex30_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex30_bpt"]);
const p-Home_Flex30_bptCb = usep-Home_Flex30_bptCb()
const p-Home_Flex35_bptProps = useStore((state)=>state["Home"]["p-Home_Flex35_bpt"]);
const p-Home_Flex35_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex35_bpt"]);
const p-Home_Flex35_bptCb = usep-Home_Flex35_bptCb()
const p-Home_Flex32_bptProps = useStore((state)=>state["Home"]["p-Home_Flex32_bpt"]);
const p-Home_Flex32_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex32_bpt"]);
const p-Home_Flex32_bptCb = usep-Home_Flex32_bptCb()
const p-Home_Flex28_bptProps = useStore((state)=>state["Home"]["p-Home_Flex28_bpt"]);
const p-Home_Flex28_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex28_bpt"]);
const p-Home_Flex28_bptCb = usep-Home_Flex28_bptCb()
const p-Home_Flex37_bptProps = useStore((state)=>state["Home"]["p-Home_Flex37_bpt"]);
const p-Home_Flex37_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex37_bpt"]);
const p-Home_Flex37_bptCb = usep-Home_Flex37_bptCb()
const p-Home_Flex38_bptProps = useStore((state)=>state["Home"]["p-Home_Flex38_bpt"]);
const p-Home_Flex38_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex38_bpt"]);
const p-Home_Flex38_bptCb = usep-Home_Flex38_bptCb()
const p-Home_Flex39_bptProps = useStore((state)=>state["Home"]["p-Home_Flex39_bpt"]);
const p-Home_Flex39_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex39_bpt"]);
const p-Home_Flex39_bptCb = usep-Home_Flex39_bptCb()
const p-Home_Flex40_bptProps = useStore((state)=>state["Home"]["p-Home_Flex40_bpt"]);
const p-Home_Flex40_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex40_bpt"]);
const p-Home_Flex40_bptCb = usep-Home_Flex40_bptCb()
const p-Home_Flex297_bptProps = useStore((state)=>state["Home"]["p-Home_Flex297_bpt"]);
const p-Home_Flex297_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex297_bpt"]);
const p-Home_Flex297_bptCb = usep-Home_Flex297_bptCb()
const p-Home_Product_Card_1_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_1_bpt"]);
const p-Home_Product_Card_1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_1_bpt"]);
const p-Home_Product_Card_1_bptCb = usep-Home_Product_Card_1_bptCb()
const p-Home_Flex42_bptProps = useStore((state)=>state["Home"]["p-Home_Flex42_bpt"]);
const p-Home_Flex42_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex42_bpt"]);
const p-Home_Flex42_bptCb = usep-Home_Flex42_bptCb()
const p-Home_Product_Card_2_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_2_bpt"]);
const p-Home_Product_Card_2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_2_bpt"]);
const p-Home_Product_Card_2_bptCb = usep-Home_Product_Card_2_bptCb()
const p-Home_Flex43_bptProps = useStore((state)=>state["Home"]["p-Home_Flex43_bpt"]);
const p-Home_Flex43_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex43_bpt"]);
const p-Home_Flex43_bptCb = usep-Home_Flex43_bptCb()
const p-Home_Flex298_bptProps = useStore((state)=>state["Home"]["p-Home_Flex298_bpt"]);
const p-Home_Flex298_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex298_bpt"]);
const p-Home_Flex298_bptCb = usep-Home_Flex298_bptCb()
const p-Home_Product_Card_3_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_3_bpt"]);
const p-Home_Product_Card_3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_3_bpt"]);
const p-Home_Product_Card_3_bptCb = usep-Home_Product_Card_3_bptCb()
const p-Home_Flex45_bptProps = useStore((state)=>state["Home"]["p-Home_Flex45_bpt"]);
const p-Home_Flex45_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex45_bpt"]);
const p-Home_Flex45_bptCb = usep-Home_Flex45_bptCb()
const p-Home_Product_Card_4_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_4_bpt"]);
const p-Home_Product_Card_4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_4_bpt"]);
const p-Home_Product_Card_4_bptCb = usep-Home_Product_Card_4_bptCb()
const p-Home_Flex47_bptProps = useStore((state)=>state["Home"]["p-Home_Flex47_bpt"]);
const p-Home_Flex47_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex47_bpt"]);
const p-Home_Flex47_bptCb = usep-Home_Flex47_bptCb()
const p-Home_Flex58_bptProps = useStore((state)=>state["Home"]["p-Home_Flex58_bpt"]);
const p-Home_Flex58_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex58_bpt"]);
const p-Home_Flex58_bptCb = usep-Home_Flex58_bptCb()
const p-Home_Flex57_bptProps = useStore((state)=>state["Home"]["p-Home_Flex57_bpt"]);
const p-Home_Flex57_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex57_bpt"]);
const p-Home_Flex57_bptCb = usep-Home_Flex57_bptCb()
const p-Home_Flex299_bptProps = useStore((state)=>state["Home"]["p-Home_Flex299_bpt"]);
const p-Home_Flex299_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex299_bpt"]);
const p-Home_Flex299_bptCb = usep-Home_Flex299_bptCb()
const p-Home_Product_Card_5_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_5_bpt"]);
const p-Home_Product_Card_5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_5_bpt"]);
const p-Home_Product_Card_5_bptCb = usep-Home_Product_Card_5_bptCb()
const p-Home_Flex52_bptProps = useStore((state)=>state["Home"]["p-Home_Flex52_bpt"]);
const p-Home_Flex52_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex52_bpt"]);
const p-Home_Flex52_bptCb = usep-Home_Flex52_bptCb()
const p-Home_Product_Card_6_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_6_bpt"]);
const p-Home_Product_Card_6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_6_bpt"]);
const p-Home_Product_Card_6_bptCb = usep-Home_Product_Card_6_bptCb()
const p-Home_Flex51_bptProps = useStore((state)=>state["Home"]["p-Home_Flex51_bpt"]);
const p-Home_Flex51_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex51_bpt"]);
const p-Home_Flex51_bptCb = usep-Home_Flex51_bptCb()
const p-Home_Flex300_bptProps = useStore((state)=>state["Home"]["p-Home_Flex300_bpt"]);
const p-Home_Flex300_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex300_bpt"]);
const p-Home_Flex300_bptCb = usep-Home_Flex300_bptCb()
const p-Home_Product_Card_7_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_7_bpt"]);
const p-Home_Product_Card_7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_7_bpt"]);
const p-Home_Product_Card_7_bptCb = usep-Home_Product_Card_7_bptCb()
const p-Home_Flex50_bptProps = useStore((state)=>state["Home"]["p-Home_Flex50_bpt"]);
const p-Home_Flex50_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex50_bpt"]);
const p-Home_Flex50_bptCb = usep-Home_Flex50_bptCb()
const p-Home_Product_Card_8_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Card_8_bpt"]);
const p-Home_Product_Card_8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Card_8_bpt"]);
const p-Home_Product_Card_8_bptCb = usep-Home_Product_Card_8_bptCb()
const p-Home_Flex49_bptProps = useStore((state)=>state["Home"]["p-Home_Flex49_bpt"]);
const p-Home_Flex49_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex49_bpt"]);
const p-Home_Flex49_bptCb = usep-Home_Flex49_bptCb()
const p-Home_Flex59_bptProps = useStore((state)=>state["Home"]["p-Home_Flex59_bpt"]);
const p-Home_Flex59_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex59_bpt"]);
const p-Home_Flex59_bptCb = usep-Home_Flex59_bptCb()
const p-Home_Flex60_bptProps = useStore((state)=>state["Home"]["p-Home_Flex60_bpt"]);
const p-Home_Flex60_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex60_bpt"]);
const p-Home_Flex60_bptCb = usep-Home_Flex60_bptCb()
const p-Home_Flex62_bptProps = useStore((state)=>state["Home"]["p-Home_Flex62_bpt"]);
const p-Home_Flex62_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex62_bpt"]);
const p-Home_Flex62_bptCb = usep-Home_Flex62_bptCb()
const p-Home_Flex61_bptProps = useStore((state)=>state["Home"]["p-Home_Flex61_bpt"]);
const p-Home_Flex61_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex61_bpt"]);
const p-Home_Flex61_bptCb = usep-Home_Flex61_bptCb()
const p-Home_Flex63_bptProps = useStore((state)=>state["Home"]["p-Home_Flex63_bpt"]);
const p-Home_Flex63_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex63_bpt"]);
const p-Home_Flex63_bptCb = usep-Home_Flex63_bptCb()
const p-Home_Flex130_bptProps = useStore((state)=>state["Home"]["p-Home_Flex130_bpt"]);
const p-Home_Flex130_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex130_bpt"]);
const p-Home_Flex130_bptCb = usep-Home_Flex130_bptCb()
const p-Home_Flex89_bptProps = useStore((state)=>state["Home"]["p-Home_Flex89_bpt"]);
const p-Home_Flex89_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex89_bpt"]);
const p-Home_Flex89_bptCb = usep-Home_Flex89_bptCb()
const p-Home_Flex128_bptProps = useStore((state)=>state["Home"]["p-Home_Flex128_bpt"]);
const p-Home_Flex128_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex128_bpt"]);
const p-Home_Flex128_bptCb = usep-Home_Flex128_bptCb()
const p-Home_Flex64_bptProps = useStore((state)=>state["Home"]["p-Home_Flex64_bpt"]);
const p-Home_Flex64_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex64_bpt"]);
const p-Home_Flex64_bptCb = usep-Home_Flex64_bptCb()
const p-Home_Flex65_bptProps = useStore((state)=>state["Home"]["p-Home_Flex65_bpt"]);
const p-Home_Flex65_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex65_bpt"]);
const p-Home_Flex65_bptCb = usep-Home_Flex65_bptCb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const p-Home_Flex131_bptProps = useStore((state)=>state["Home"]["p-Home_Flex131_bpt"]);
const p-Home_Flex131_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex131_bpt"]);
const p-Home_Flex131_bptCb = usep-Home_Flex131_bptCb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const p-Home_Flex67_bptProps = useStore((state)=>state["Home"]["p-Home_Flex67_bpt"]);
const p-Home_Flex67_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex67_bpt"]);
const p-Home_Flex67_bptCb = usep-Home_Flex67_bptCb()
const p-Home_Flex68_bptProps = useStore((state)=>state["Home"]["p-Home_Flex68_bpt"]);
const p-Home_Flex68_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex68_bpt"]);
const p-Home_Flex68_bptCb = usep-Home_Flex68_bptCb()
const p-Home_Flex129_bptProps = useStore((state)=>state["Home"]["p-Home_Flex129_bpt"]);
const p-Home_Flex129_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex129_bpt"]);
const p-Home_Flex129_bptCb = usep-Home_Flex129_bptCb()
const p-Home_Flex69_bptProps = useStore((state)=>state["Home"]["p-Home_Flex69_bpt"]);
const p-Home_Flex69_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex69_bpt"]);
const p-Home_Flex69_bptCb = usep-Home_Flex69_bptCb()
const p-Home_Flex71_bptProps = useStore((state)=>state["Home"]["p-Home_Flex71_bpt"]);
const p-Home_Flex71_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex71_bpt"]);
const p-Home_Flex71_bptCb = usep-Home_Flex71_bptCb()
const p-Home_Flex72_bptProps = useStore((state)=>state["Home"]["p-Home_Flex72_bpt"]);
const p-Home_Flex72_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex72_bpt"]);
const p-Home_Flex72_bptCb = usep-Home_Flex72_bptCb()
const p-Home_Flex73_bptProps = useStore((state)=>state["Home"]["p-Home_Flex73_bpt"]);
const p-Home_Flex73_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex73_bpt"]);
const p-Home_Flex73_bptCb = usep-Home_Flex73_bptCb()
const p-Home_Flex74_bptProps = useStore((state)=>state["Home"]["p-Home_Flex74_bpt"]);
const p-Home_Flex74_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex74_bpt"]);
const p-Home_Flex74_bptCb = usep-Home_Flex74_bptCb()
const p-Home_Flex75_bptProps = useStore((state)=>state["Home"]["p-Home_Flex75_bpt"]);
const p-Home_Flex75_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex75_bpt"]);
const p-Home_Flex75_bptCb = usep-Home_Flex75_bptCb()
const p-Home_Flex76_bptProps = useStore((state)=>state["Home"]["p-Home_Flex76_bpt"]);
const p-Home_Flex76_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex76_bpt"]);
const p-Home_Flex76_bptCb = usep-Home_Flex76_bptCb()
const p-Home_Flex77_bptProps = useStore((state)=>state["Home"]["p-Home_Flex77_bpt"]);
const p-Home_Flex77_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex77_bpt"]);
const p-Home_Flex77_bptCb = usep-Home_Flex77_bptCb()
const p-Home_Flex82_bptProps = useStore((state)=>state["Home"]["p-Home_Flex82_bpt"]);
const p-Home_Flex82_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex82_bpt"]);
const p-Home_Flex82_bptCb = usep-Home_Flex82_bptCb()
const p-Home_Flex81_bptProps = useStore((state)=>state["Home"]["p-Home_Flex81_bpt"]);
const p-Home_Flex81_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex81_bpt"]);
const p-Home_Flex81_bptCb = usep-Home_Flex81_bptCb()
const p-Home_Flex85_bptProps = useStore((state)=>state["Home"]["p-Home_Flex85_bpt"]);
const p-Home_Flex85_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex85_bpt"]);
const p-Home_Flex85_bptCb = usep-Home_Flex85_bptCb()
const p-Home_Flex84_bptProps = useStore((state)=>state["Home"]["p-Home_Flex84_bpt"]);
const p-Home_Flex84_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex84_bpt"]);
const p-Home_Flex84_bptCb = usep-Home_Flex84_bptCb()
const p-Home_Flex83_bptProps = useStore((state)=>state["Home"]["p-Home_Flex83_bpt"]);
const p-Home_Flex83_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex83_bpt"]);
const p-Home_Flex83_bptCb = usep-Home_Flex83_bptCb()
const p-Home_Flex90_bptProps = useStore((state)=>state["Home"]["p-Home_Flex90_bpt"]);
const p-Home_Flex90_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex90_bpt"]);
const p-Home_Flex90_bptCb = usep-Home_Flex90_bptCb()
const p-Home_Flex90_bptProps = useStore((state)=>state["Home"]["p-Home_Flex90_bpt"]);
const p-Home_Flex90_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex90_bpt"]);
const p-Home_Flex90_bptCb = usep-Home_Flex90_bptCb()
const p-Home_Flex93_bptProps = useStore((state)=>state["Home"]["p-Home_Flex93_bpt"]);
const p-Home_Flex93_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex93_bpt"]);
const p-Home_Flex93_bptCb = usep-Home_Flex93_bptCb()
const p-Home_Flex95_bptProps = useStore((state)=>state["Home"]["p-Home_Flex95_bpt"]);
const p-Home_Flex95_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex95_bpt"]);
const p-Home_Flex95_bptCb = usep-Home_Flex95_bptCb()
const p-Home_Flex94_bptProps = useStore((state)=>state["Home"]["p-Home_Flex94_bpt"]);
const p-Home_Flex94_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex94_bpt"]);
const p-Home_Flex94_bptCb = usep-Home_Flex94_bptCb()
const p-Home_Flex92_bptProps = useStore((state)=>state["Home"]["p-Home_Flex92_bpt"]);
const p-Home_Flex92_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex92_bpt"]);
const p-Home_Flex92_bptCb = usep-Home_Flex92_bptCb()
const p-Home_Flex98_bptProps = useStore((state)=>state["Home"]["p-Home_Flex98_bpt"]);
const p-Home_Flex98_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex98_bpt"]);
const p-Home_Flex98_bptCb = usep-Home_Flex98_bptCb()
const p-Home_Flex99_bptProps = useStore((state)=>state["Home"]["p-Home_Flex99_bpt"]);
const p-Home_Flex99_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex99_bpt"]);
const p-Home_Flex99_bptCb = usep-Home_Flex99_bptCb()
const p-Home_Flex100_bptProps = useStore((state)=>state["Home"]["p-Home_Flex100_bpt"]);
const p-Home_Flex100_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex100_bpt"]);
const p-Home_Flex100_bptCb = usep-Home_Flex100_bptCb()
const p-Home_Flex101_bptProps = useStore((state)=>state["Home"]["p-Home_Flex101_bpt"]);
const p-Home_Flex101_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex101_bpt"]);
const p-Home_Flex101_bptCb = usep-Home_Flex101_bptCb()
const p-Home_Flex108_bptProps = useStore((state)=>state["Home"]["p-Home_Flex108_bpt"]);
const p-Home_Flex108_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex108_bpt"]);
const p-Home_Flex108_bptCb = usep-Home_Flex108_bptCb()
const p-Home_Flex107_bptProps = useStore((state)=>state["Home"]["p-Home_Flex107_bpt"]);
const p-Home_Flex107_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex107_bpt"]);
const p-Home_Flex107_bptCb = usep-Home_Flex107_bptCb()
const p-Home_Flex106_bptProps = useStore((state)=>state["Home"]["p-Home_Flex106_bpt"]);
const p-Home_Flex106_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex106_bpt"]);
const p-Home_Flex106_bptCb = usep-Home_Flex106_bptCb()
const p-Home_Flex105_bptProps = useStore((state)=>state["Home"]["p-Home_Flex105_bpt"]);
const p-Home_Flex105_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex105_bpt"]);
const p-Home_Flex105_bptCb = usep-Home_Flex105_bptCb()
const p-Home_Flex104_bptProps = useStore((state)=>state["Home"]["p-Home_Flex104_bpt"]);
const p-Home_Flex104_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex104_bpt"]);
const p-Home_Flex104_bptCb = usep-Home_Flex104_bptCb()
const p-Home_Flex103_bptProps = useStore((state)=>state["Home"]["p-Home_Flex103_bpt"]);
const p-Home_Flex103_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex103_bpt"]);
const p-Home_Flex103_bptCb = usep-Home_Flex103_bptCb()
const p-Home_Flex102_bptProps = useStore((state)=>state["Home"]["p-Home_Flex102_bpt"]);
const p-Home_Flex102_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex102_bpt"]);
const p-Home_Flex102_bptCb = usep-Home_Flex102_bptCb()
const p-Home_Flex110_bptProps = useStore((state)=>state["Home"]["p-Home_Flex110_bpt"]);
const p-Home_Flex110_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex110_bpt"]);
const p-Home_Flex110_bptCb = usep-Home_Flex110_bptCb()
const p-Home_Flex113_bptProps = useStore((state)=>state["Home"]["p-Home_Flex113_bpt"]);
const p-Home_Flex113_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex113_bpt"]);
const p-Home_Flex113_bptCb = usep-Home_Flex113_bptCb()
const p-Home_Flex114_bptProps = useStore((state)=>state["Home"]["p-Home_Flex114_bpt"]);
const p-Home_Flex114_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex114_bpt"]);
const p-Home_Flex114_bptCb = usep-Home_Flex114_bptCb()
const p-Home_Flex115_bptProps = useStore((state)=>state["Home"]["p-Home_Flex115_bpt"]);
const p-Home_Flex115_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex115_bpt"]);
const p-Home_Flex115_bptCb = usep-Home_Flex115_bptCb()
const p-Home_Flex116_bptProps = useStore((state)=>state["Home"]["p-Home_Flex116_bpt"]);
const p-Home_Flex116_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex116_bpt"]);
const p-Home_Flex116_bptCb = usep-Home_Flex116_bptCb()
const p-Home_Flex112_bptProps = useStore((state)=>state["Home"]["p-Home_Flex112_bpt"]);
const p-Home_Flex112_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex112_bpt"]);
const p-Home_Flex112_bptCb = usep-Home_Flex112_bptCb()
const p-Home_Flex111_bptProps = useStore((state)=>state["Home"]["p-Home_Flex111_bpt"]);
const p-Home_Flex111_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex111_bpt"]);
const p-Home_Flex111_bptCb = usep-Home_Flex111_bptCb()
const p-Home_Flex117_bptProps = useStore((state)=>state["Home"]["p-Home_Flex117_bpt"]);
const p-Home_Flex117_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex117_bpt"]);
const p-Home_Flex117_bptCb = usep-Home_Flex117_bptCb()
const p-Home_Flex118_bptProps = useStore((state)=>state["Home"]["p-Home_Flex118_bpt"]);
const p-Home_Flex118_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex118_bpt"]);
const p-Home_Flex118_bptCb = usep-Home_Flex118_bptCb()
const p-Home_Flex121_bptProps = useStore((state)=>state["Home"]["p-Home_Flex121_bpt"]);
const p-Home_Flex121_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex121_bpt"]);
const p-Home_Flex121_bptCb = usep-Home_Flex121_bptCb()
const p-Home_Flex120_bptProps = useStore((state)=>state["Home"]["p-Home_Flex120_bpt"]);
const p-Home_Flex120_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex120_bpt"]);
const p-Home_Flex120_bptCb = usep-Home_Flex120_bptCb()
const p-Home_Flex124_bptProps = useStore((state)=>state["Home"]["p-Home_Flex124_bpt"]);
const p-Home_Flex124_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex124_bpt"]);
const p-Home_Flex124_bptCb = usep-Home_Flex124_bptCb()
const p-Home_Flex123_bptProps = useStore((state)=>state["Home"]["p-Home_Flex123_bpt"]);
const p-Home_Flex123_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex123_bpt"]);
const p-Home_Flex123_bptCb = usep-Home_Flex123_bptCb()
const p-Home_Flex122_bptProps = useStore((state)=>state["Home"]["p-Home_Flex122_bpt"]);
const p-Home_Flex122_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex122_bpt"]);
const p-Home_Flex122_bptCb = usep-Home_Flex122_bptCb()
const p-Home_Flex119_bptProps = useStore((state)=>state["Home"]["p-Home_Flex119_bpt"]);
const p-Home_Flex119_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex119_bpt"]);
const p-Home_Flex119_bptCb = usep-Home_Flex119_bptCb()
const p-Home_Flex125_bptProps = useStore((state)=>state["Home"]["p-Home_Flex125_bpt"]);
const p-Home_Flex125_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex125_bpt"]);
const p-Home_Flex125_bptCb = usep-Home_Flex125_bptCb()
const p-Home_Flex127_bptProps = useStore((state)=>state["Home"]["p-Home_Flex127_bpt"]);
const p-Home_Flex127_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex127_bpt"]);
const p-Home_Flex127_bptCb = usep-Home_Flex127_bptCb()
const p-Home_Image2_bptProps = useStore((state)=>state["Home"]["p-Home_Image2_bpt"]);
const p-Home_Image2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image2_bpt"]);
const p-Home_Image2_bptCb = usep-Home_Image2_bptCb()
const p-Home_TextBox6_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox6_bpt"]);
const p-Home_TextBox6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox6_bpt"]);
const p-Home_TextBox6_bptCb = usep-Home_TextBox6_bptCb()
const p-Home_TextBox1_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox1_bpt"]);
const p-Home_TextBox1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox1_bpt"]);
const p-Home_TextBox1_bptCb = usep-Home_TextBox1_bptCb()
const p-Home_TextBox2_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox2_bpt"]);
const p-Home_TextBox2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox2_bpt"]);
const p-Home_TextBox2_bptCb = usep-Home_TextBox2_bptCb()
const p-Home_TextBox4_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox4_bpt"]);
const p-Home_TextBox4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox4_bpt"]);
const p-Home_TextBox4_bptCb = usep-Home_TextBox4_bptCb()
const p-Home_TextBox3_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox3_bpt"]);
const p-Home_TextBox3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox3_bpt"]);
const p-Home_TextBox3_bptCb = usep-Home_TextBox3_bptCb()
const p-Home_Button2_bptProps = useStore((state)=>state["Home"]["p-Home_Button2_bpt"]);
const p-Home_Button2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button2_bpt"]);
const p-Home_Button2_bptCb = usep-Home_Button2_bptCb()
const p-Home_Button1_bptProps = useStore((state)=>state["Home"]["p-Home_Button1_bpt"]);
const p-Home_Button1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button1_bpt"]);
const p-Home_Button1_bptCb = usep-Home_Button1_bptCb()
const p-Home_TextBox9_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox9_bpt"]);
const p-Home_TextBox9_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox9_bpt"]);
const p-Home_TextBox9_bptCb = usep-Home_TextBox9_bptCb()
const p-Home_Button4_bptProps = useStore((state)=>state["Home"]["p-Home_Button4_bpt"]);
const p-Home_Button4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button4_bpt"]);
const p-Home_Button4_bptCb = usep-Home_Button4_bptCb()
const p-Home_Button3_bptProps = useStore((state)=>state["Home"]["p-Home_Button3_bpt"]);
const p-Home_Button3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button3_bpt"]);
const p-Home_Button3_bptCb = usep-Home_Button3_bptCb()
const p-Home_TextBox8_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox8_bpt"]);
const p-Home_TextBox8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox8_bpt"]);
const p-Home_TextBox8_bptCb = usep-Home_TextBox8_bptCb()
const p-Home_TextBox7_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox7_bpt"]);
const p-Home_TextBox7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox7_bpt"]);
const p-Home_TextBox7_bptCb = usep-Home_TextBox7_bptCb()
const p-Home_Image5_bptProps = useStore((state)=>state["Home"]["p-Home_Image5_bpt"]);
const p-Home_Image5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image5_bpt"]);
const p-Home_Image5_bptCb = usep-Home_Image5_bptCb()
const p-Home_TextBox10_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox10_bpt"]);
const p-Home_TextBox10_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox10_bpt"]);
const p-Home_TextBox10_bptCb = usep-Home_TextBox10_bptCb()
const p-Home_Image10_bptProps = useStore((state)=>state["Home"]["p-Home_Image10_bpt"]);
const p-Home_Image10_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image10_bpt"]);
const p-Home_Image10_bptCb = usep-Home_Image10_bptCb()
const p-Home_Image6_bptProps = useStore((state)=>state["Home"]["p-Home_Image6_bpt"]);
const p-Home_Image6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image6_bpt"]);
const p-Home_Image6_bptCb = usep-Home_Image6_bptCb()
const p-Home_Image197_bptProps = useStore((state)=>state["Home"]["p-Home_Image197_bpt"]);
const p-Home_Image197_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image197_bpt"]);
const p-Home_Image197_bptCb = usep-Home_Image197_bptCb()
const p-Home_Image198_bptProps = useStore((state)=>state["Home"]["p-Home_Image198_bpt"]);
const p-Home_Image198_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image198_bpt"]);
const p-Home_Image198_bptCb = usep-Home_Image198_bptCb()
const p-Home_TextBox11_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox11_bpt"]);
const p-Home_TextBox11_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox11_bpt"]);
const p-Home_TextBox11_bptCb = usep-Home_TextBox11_bptCb()
const p-Home_Image11_bptProps = useStore((state)=>state["Home"]["p-Home_Image11_bpt"]);
const p-Home_Image11_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image11_bpt"]);
const p-Home_Image11_bptCb = usep-Home_Image11_bptCb()
const p-Home_TextBox12_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox12_bpt"]);
const p-Home_TextBox12_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox12_bpt"]);
const p-Home_TextBox12_bptCb = usep-Home_TextBox12_bptCb()
const p-Home_TextBox13_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox13_bpt"]);
const p-Home_TextBox13_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox13_bpt"]);
const p-Home_TextBox13_bptCb = usep-Home_TextBox13_bptCb()
const p-Home_TextBox14_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox14_bpt"]);
const p-Home_TextBox14_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox14_bpt"]);
const p-Home_TextBox14_bptCb = usep-Home_TextBox14_bptCb()
const p-Home_Image195_bptProps = useStore((state)=>state["Home"]["p-Home_Image195_bpt"]);
const p-Home_Image195_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image195_bpt"]);
const p-Home_Image195_bptCb = usep-Home_Image195_bptCb()
const p-Home_TextBox384_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox384_bpt"]);
const p-Home_TextBox384_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox384_bpt"]);
const p-Home_TextBox384_bptCb = usep-Home_TextBox384_bptCb()
const p-Home_TextBox382_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox382_bpt"]);
const p-Home_TextBox382_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox382_bpt"]);
const p-Home_TextBox382_bptCb = usep-Home_TextBox382_bptCb()
const p-Home_TextBox383_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox383_bpt"]);
const p-Home_TextBox383_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox383_bpt"]);
const p-Home_TextBox383_bptCb = usep-Home_TextBox383_bptCb()
const p-Home_Image17_bptProps = useStore((state)=>state["Home"]["p-Home_Image17_bpt"]);
const p-Home_Image17_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image17_bpt"]);
const p-Home_Image17_bptCb = usep-Home_Image17_bptCb()
const p-Home_TextBox31_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox31_bpt"]);
const p-Home_TextBox31_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox31_bpt"]);
const p-Home_TextBox31_bptCb = usep-Home_TextBox31_bptCb()
const p-Home_TextBox30_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox30_bpt"]);
const p-Home_TextBox30_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox30_bpt"]);
const p-Home_TextBox30_bptCb = usep-Home_TextBox30_bptCb()
const p-Home_TextBox32_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox32_bpt"]);
const p-Home_TextBox32_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox32_bpt"]);
const p-Home_TextBox32_bptCb = usep-Home_TextBox32_bptCb()
const p-Home_Image196_bptProps = useStore((state)=>state["Home"]["p-Home_Image196_bpt"]);
const p-Home_Image196_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image196_bpt"]);
const p-Home_Image196_bptCb = usep-Home_Image196_bptCb()
const p-Home_TextBox386_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox386_bpt"]);
const p-Home_TextBox386_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox386_bpt"]);
const p-Home_TextBox386_bptCb = usep-Home_TextBox386_bptCb()
const p-Home_TextBox385_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox385_bpt"]);
const p-Home_TextBox385_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox385_bpt"]);
const p-Home_TextBox385_bptCb = usep-Home_TextBox385_bptCb()
const p-Home_TextBox387_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox387_bpt"]);
const p-Home_TextBox387_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox387_bpt"]);
const p-Home_TextBox387_bptCb = usep-Home_TextBox387_bptCb()
const p-Home_Button18_bptProps = useStore((state)=>state["Home"]["p-Home_Button18_bpt"]);
const p-Home_Button18_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button18_bpt"]);
const p-Home_Button18_bptCb = usep-Home_Button18_bptCb()
const p-Home_Button17_bptProps = useStore((state)=>state["Home"]["p-Home_Button17_bpt"]);
const p-Home_Button17_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button17_bpt"]);
const p-Home_Button17_bptCb = usep-Home_Button17_bptCb()
const p-Home_Image19_bptProps = useStore((state)=>state["Home"]["p-Home_Image19_bpt"]);
const p-Home_Image19_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image19_bpt"]);
const p-Home_Image19_bptCb = usep-Home_Image19_bptCb()
const p-Home_TextBox36_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox36_bpt"]);
const p-Home_TextBox36_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox36_bpt"]);
const p-Home_TextBox36_bptCb = usep-Home_TextBox36_bptCb()
const p-Home_Image20_bptProps = useStore((state)=>state["Home"]["p-Home_Image20_bpt"]);
const p-Home_Image20_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image20_bpt"]);
const p-Home_Image20_bptCb = usep-Home_Image20_bptCb()
const p-Home_TextBox38_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox38_bpt"]);
const p-Home_TextBox38_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox38_bpt"]);
const p-Home_TextBox38_bptCb = usep-Home_TextBox38_bptCb()
const p-Home_Image25_bptProps = useStore((state)=>state["Home"]["p-Home_Image25_bpt"]);
const p-Home_Image25_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image25_bpt"]);
const p-Home_Image25_bptCb = usep-Home_Image25_bptCb()
const p-Home_TextBox43_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox43_bpt"]);
const p-Home_TextBox43_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox43_bpt"]);
const p-Home_TextBox43_bptCb = usep-Home_TextBox43_bptCb()
const p-Home_TextBox40_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox40_bpt"]);
const p-Home_TextBox40_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox40_bpt"]);
const p-Home_TextBox40_bptCb = usep-Home_TextBox40_bptCb()
const p-Home_Image22_bptProps = useStore((state)=>state["Home"]["p-Home_Image22_bpt"]);
const p-Home_Image22_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image22_bpt"]);
const p-Home_Image22_bptCb = usep-Home_Image22_bptCb()
const p-Home_TextBox44_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox44_bpt"]);
const p-Home_TextBox44_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox44_bpt"]);
const p-Home_TextBox44_bptCb = usep-Home_TextBox44_bptCb()
const p-Home_TextBox45_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox45_bpt"]);
const p-Home_TextBox45_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox45_bpt"]);
const p-Home_TextBox45_bptCb = usep-Home_TextBox45_bptCb()
const p-Home_TextBox46_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox46_bpt"]);
const p-Home_TextBox46_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox46_bpt"]);
const p-Home_TextBox46_bptCb = usep-Home_TextBox46_bptCb()
const p-Home_Button11_bptProps = useStore((state)=>state["Home"]["p-Home_Button11_bpt"]);
const p-Home_Button11_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button11_bpt"]);
const p-Home_Button11_bptCb = usep-Home_Button11_bptCb()
const p-Home_Button12_bptProps = useStore((state)=>state["Home"]["p-Home_Button12_bpt"]);
const p-Home_Button12_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button12_bpt"]);
const p-Home_Button12_bptCb = usep-Home_Button12_bptCb()
const p-Home_TextBox47_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox47_bpt"]);
const p-Home_TextBox47_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox47_bpt"]);
const p-Home_TextBox47_bptCb = usep-Home_TextBox47_bptCb()
const p-Home_TextBox48_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox48_bpt"]);
const p-Home_TextBox48_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox48_bpt"]);
const p-Home_TextBox48_bptCb = usep-Home_TextBox48_bptCb()
const p-Home_Product_Image_1_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_1_bpt"]);
const p-Home_Product_Image_1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_1_bpt"]);
const p-Home_Product_Image_1_bptCb = usep-Home_Product_Image_1_bptCb()
const p-Home_Product_Name_1_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_1_bpt"]);
const p-Home_Product_Name_1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_1_bpt"]);
const p-Home_Product_Name_1_bptCb = usep-Home_Product_Name_1_bptCb()
const p-Home_Product_About_1_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_1_bpt"]);
const p-Home_Product_About_1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_1_bpt"]);
const p-Home_Product_About_1_bptCb = usep-Home_Product_About_1_bptCb()
const p-Home_Product_Price_1_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_1_bpt"]);
const p-Home_Product_Price_1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_1_bpt"]);
const p-Home_Product_Price_1_bptCb = usep-Home_Product_Price_1_bptCb()
const p-Home_Product_Image_2_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_2_bpt"]);
const p-Home_Product_Image_2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_2_bpt"]);
const p-Home_Product_Image_2_bptCb = usep-Home_Product_Image_2_bptCb()
const p-Home_Product_Name_2_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_2_bpt"]);
const p-Home_Product_Name_2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_2_bpt"]);
const p-Home_Product_Name_2_bptCb = usep-Home_Product_Name_2_bptCb()
const p-Home_Product_About_2_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_2_bpt"]);
const p-Home_Product_About_2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_2_bpt"]);
const p-Home_Product_About_2_bptCb = usep-Home_Product_About_2_bptCb()
const p-Home_Product_Price_2_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_2_bpt"]);
const p-Home_Product_Price_2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_2_bpt"]);
const p-Home_Product_Price_2_bptCb = usep-Home_Product_Price_2_bptCb()
const p-Home_Product_Image_3_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_3_bpt"]);
const p-Home_Product_Image_3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_3_bpt"]);
const p-Home_Product_Image_3_bptCb = usep-Home_Product_Image_3_bptCb()
const p-Home_Product_Name_3_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_3_bpt"]);
const p-Home_Product_Name_3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_3_bpt"]);
const p-Home_Product_Name_3_bptCb = usep-Home_Product_Name_3_bptCb()
const p-Home_Product_About_3_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_3_bpt"]);
const p-Home_Product_About_3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_3_bpt"]);
const p-Home_Product_About_3_bptCb = usep-Home_Product_About_3_bptCb()
const p-Home_Product_Price_3_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_3_bpt"]);
const p-Home_Product_Price_3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_3_bpt"]);
const p-Home_Product_Price_3_bptCb = usep-Home_Product_Price_3_bptCb()
const p-Home_Product_Image_4_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_4_bpt"]);
const p-Home_Product_Image_4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_4_bpt"]);
const p-Home_Product_Image_4_bptCb = usep-Home_Product_Image_4_bptCb()
const p-Home_Product_Name_4_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_4_bpt"]);
const p-Home_Product_Name_4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_4_bpt"]);
const p-Home_Product_Name_4_bptCb = usep-Home_Product_Name_4_bptCb()
const p-Home_Product_About_4_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_4_bpt"]);
const p-Home_Product_About_4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_4_bpt"]);
const p-Home_Product_About_4_bptCb = usep-Home_Product_About_4_bptCb()
const p-Home_Product_Price_4_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_4_bpt"]);
const p-Home_Product_Price_4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_4_bpt"]);
const p-Home_Product_Price_4_bptCb = usep-Home_Product_Price_4_bptCb()
const p-Home_Button14_bptProps = useStore((state)=>state["Home"]["p-Home_Button14_bpt"]);
const p-Home_Button14_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button14_bpt"]);
const p-Home_Button14_bptCb = usep-Home_Button14_bptCb()
const p-Home_Button13_bptProps = useStore((state)=>state["Home"]["p-Home_Button13_bpt"]);
const p-Home_Button13_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button13_bpt"]);
const p-Home_Button13_bptCb = usep-Home_Button13_bptCb()
const p-Home_Product_Image_5_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_5_bpt"]);
const p-Home_Product_Image_5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_5_bpt"]);
const p-Home_Product_Image_5_bptCb = usep-Home_Product_Image_5_bptCb()
const p-Home_Product_About_5_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_5_bpt"]);
const p-Home_Product_About_5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_5_bpt"]);
const p-Home_Product_About_5_bptCb = usep-Home_Product_About_5_bptCb()
const p-Home_Product_Name_5_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_5_bpt"]);
const p-Home_Product_Name_5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_5_bpt"]);
const p-Home_Product_Name_5_bptCb = usep-Home_Product_Name_5_bptCb()
const p-Home_Product_Price_5_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_5_bpt"]);
const p-Home_Product_Price_5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_5_bpt"]);
const p-Home_Product_Price_5_bptCb = usep-Home_Product_Price_5_bptCb()
const p-Home_Product_Image_6_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_6_bpt"]);
const p-Home_Product_Image_6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_6_bpt"]);
const p-Home_Product_Image_6_bptCb = usep-Home_Product_Image_6_bptCb()
const p-Home_Product_Name_6_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_6_bpt"]);
const p-Home_Product_Name_6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_6_bpt"]);
const p-Home_Product_Name_6_bptCb = usep-Home_Product_Name_6_bptCb()
const p-Home_Product_About_6_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_6_bpt"]);
const p-Home_Product_About_6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_6_bpt"]);
const p-Home_Product_About_6_bptCb = usep-Home_Product_About_6_bptCb()
const p-Home_Product_Price_6_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_6_bpt"]);
const p-Home_Product_Price_6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_6_bpt"]);
const p-Home_Product_Price_6_bptCb = usep-Home_Product_Price_6_bptCb()
const p-Home_Product_Image_7_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_7_bpt"]);
const p-Home_Product_Image_7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_7_bpt"]);
const p-Home_Product_Image_7_bptCb = usep-Home_Product_Image_7_bptCb()
const p-Home_Product_Name_7_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_7_bpt"]);
const p-Home_Product_Name_7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_7_bpt"]);
const p-Home_Product_Name_7_bptCb = usep-Home_Product_Name_7_bptCb()
const p-Home_Product_About_7_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_7_bpt"]);
const p-Home_Product_About_7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_7_bpt"]);
const p-Home_Product_About_7_bptCb = usep-Home_Product_About_7_bptCb()
const p-Home_Product_Price_7_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_7_bpt"]);
const p-Home_Product_Price_7_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_7_bpt"]);
const p-Home_Product_Price_7_bptCb = usep-Home_Product_Price_7_bptCb()
const p-Home_Product_Image_8_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Image_8_bpt"]);
const p-Home_Product_Image_8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Image_8_bpt"]);
const p-Home_Product_Image_8_bptCb = usep-Home_Product_Image_8_bptCb()
const p-Home_Product_Name_8_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Name_8_bpt"]);
const p-Home_Product_Name_8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Name_8_bpt"]);
const p-Home_Product_Name_8_bptCb = usep-Home_Product_Name_8_bptCb()
const p-Home_Product_About_8_bptProps = useStore((state)=>state["Home"]["p-Home_Product_About_8_bpt"]);
const p-Home_Product_About_8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_About_8_bpt"]);
const p-Home_Product_About_8_bptCb = usep-Home_Product_About_8_bptCb()
const p-Home_Product_Price_8_bptProps = useStore((state)=>state["Home"]["p-Home_Product_Price_8_bpt"]);
const p-Home_Product_Price_8_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Product_Price_8_bpt"]);
const p-Home_Product_Price_8_bptCb = usep-Home_Product_Price_8_bptCb()
const p-Home_TextBox73_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox73_bpt"]);
const p-Home_TextBox73_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox73_bpt"]);
const p-Home_TextBox73_bptCb = usep-Home_TextBox73_bptCb()
const p-Home_TextBox74_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox74_bpt"]);
const p-Home_TextBox74_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox74_bpt"]);
const p-Home_TextBox74_bptCb = usep-Home_TextBox74_bptCb()
const p-Home_Button15_bptProps = useStore((state)=>state["Home"]["p-Home_Button15_bpt"]);
const p-Home_Button15_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button15_bpt"]);
const p-Home_Button15_bptCb = usep-Home_Button15_bptCb()
const p-Home_Button16_bptProps = useStore((state)=>state["Home"]["p-Home_Button16_bpt"]);
const p-Home_Button16_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button16_bpt"]);
const p-Home_Button16_bptCb = usep-Home_Button16_bptCb()
const p-Home_Image34_bptProps = useStore((state)=>state["Home"]["p-Home_Image34_bpt"]);
const p-Home_Image34_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image34_bpt"]);
const p-Home_Image34_bptCb = usep-Home_Image34_bptCb()
const p-Home_TextBox75_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox75_bpt"]);
const p-Home_TextBox75_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox75_bpt"]);
const p-Home_TextBox75_bptCb = usep-Home_TextBox75_bptCb()
const p-Home_TextBox76_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox76_bpt"]);
const p-Home_TextBox76_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox76_bpt"]);
const p-Home_TextBox76_bptCb = usep-Home_TextBox76_bptCb()
const p-Home_TextBox142_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox142_bpt"]);
const p-Home_TextBox142_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox142_bpt"]);
const p-Home_TextBox142_bptCb = usep-Home_TextBox142_bptCb()
const p-Home_Image74_bptProps = useStore((state)=>state["Home"]["p-Home_Image74_bpt"]);
const p-Home_Image74_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image74_bpt"]);
const p-Home_Image74_bptCb = usep-Home_Image74_bptCb()
const p-Home_TextBox78_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox78_bpt"]);
const p-Home_TextBox78_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox78_bpt"]);
const p-Home_TextBox78_bptCb = usep-Home_TextBox78_bptCb()
const p-Home_TextBox79_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox79_bpt"]);
const p-Home_TextBox79_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox79_bpt"]);
const p-Home_TextBox79_bptCb = usep-Home_TextBox79_bptCb()
const p-Home_Flex132_bptProps = useStore((state)=>state["Home"]["p-Home_Flex132_bpt"]);
const p-Home_Flex132_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex132_bpt"]);
const p-Home_Flex132_bptCb = usep-Home_Flex132_bptCb()
const p-Home_Flex133_bptProps = useStore((state)=>state["Home"]["p-Home_Flex133_bpt"]);
const p-Home_Flex133_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex133_bpt"]);
const p-Home_Flex133_bptCb = usep-Home_Flex133_bptCb()
const p-Home_Flex134_bptProps = useStore((state)=>state["Home"]["p-Home_Flex134_bpt"]);
const p-Home_Flex134_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex134_bpt"]);
const p-Home_Flex134_bptCb = usep-Home_Flex134_bptCb()
const p-Home_Image44_bptProps = useStore((state)=>state["Home"]["p-Home_Image44_bpt"]);
const p-Home_Image44_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image44_bpt"]);
const p-Home_Image44_bptCb = usep-Home_Image44_bptCb()
const p-Home_Flex132_bptProps = useStore((state)=>state["Home"]["p-Home_Flex132_bpt"]);
const p-Home_Flex132_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Flex132_bpt"]);
const p-Home_Flex132_bptCb = usep-Home_Flex132_bptCb()
const p-Home_Image40_bptProps = useStore((state)=>state["Home"]["p-Home_Image40_bpt"]);
const p-Home_Image40_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image40_bpt"]);
const p-Home_Image40_bptCb = usep-Home_Image40_bptCb()
const p-Home_TextBox80_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox80_bpt"]);
const p-Home_TextBox80_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox80_bpt"]);
const p-Home_TextBox80_bptCb = usep-Home_TextBox80_bptCb()
const p-Home_TextBox81_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox81_bpt"]);
const p-Home_TextBox81_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox81_bpt"]);
const p-Home_TextBox81_bptCb = usep-Home_TextBox81_bptCb()
const p-Home_Image75_bptProps = useStore((state)=>state["Home"]["p-Home_Image75_bpt"]);
const p-Home_Image75_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image75_bpt"]);
const p-Home_Image75_bptCb = usep-Home_Image75_bptCb()
const p-Home_Button18_bptProps = useStore((state)=>state["Home"]["p-Home_Button18_bpt"]);
const p-Home_Button18_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button18_bpt"]);
const p-Home_Button18_bptCb = usep-Home_Button18_bptCb()
const p-Home_Button17_bptProps = useStore((state)=>state["Home"]["p-Home_Button17_bpt"]);
const p-Home_Button17_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button17_bpt"]);
const p-Home_Button17_bptCb = usep-Home_Button17_bptCb()
const p-Home_TextBox82_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox82_bpt"]);
const p-Home_TextBox82_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox82_bpt"]);
const p-Home_TextBox82_bptCb = usep-Home_TextBox82_bptCb()
const p-Home_TextBox83_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox83_bpt"]);
const p-Home_TextBox83_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox83_bpt"]);
const p-Home_TextBox83_bptCb = usep-Home_TextBox83_bptCb()
const p-Home_Image45_bptProps = useStore((state)=>state["Home"]["p-Home_Image45_bpt"]);
const p-Home_Image45_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image45_bpt"]);
const p-Home_Image45_bptCb = usep-Home_Image45_bptCb()
const p-Home_TextBox85_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox85_bpt"]);
const p-Home_TextBox85_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox85_bpt"]);
const p-Home_TextBox85_bptCb = usep-Home_TextBox85_bptCb()
const p-Home_TextBox86_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox86_bpt"]);
const p-Home_TextBox86_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox86_bpt"]);
const p-Home_TextBox86_bptCb = usep-Home_TextBox86_bptCb()
const p-Home_TextBox84_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox84_bpt"]);
const p-Home_TextBox84_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox84_bpt"]);
const p-Home_TextBox84_bptCb = usep-Home_TextBox84_bptCb()
const p-Home_Image51_bptProps = useStore((state)=>state["Home"]["p-Home_Image51_bpt"]);
const p-Home_Image51_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image51_bpt"]);
const p-Home_Image51_bptCb = usep-Home_Image51_bptCb()
const p-Home_TextBox100_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox100_bpt"]);
const p-Home_TextBox100_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox100_bpt"]);
const p-Home_TextBox100_bptCb = usep-Home_TextBox100_bptCb()
const p-Home_TextBox99_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox99_bpt"]);
const p-Home_TextBox99_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox99_bpt"]);
const p-Home_TextBox99_bptCb = usep-Home_TextBox99_bptCb()
const p-Home_Image49_bptProps = useStore((state)=>state["Home"]["p-Home_Image49_bpt"]);
const p-Home_Image49_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image49_bpt"]);
const p-Home_Image49_bptCb = usep-Home_Image49_bptCb()
const p-Home_TextBox96_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox96_bpt"]);
const p-Home_TextBox96_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox96_bpt"]);
const p-Home_TextBox96_bptCb = usep-Home_TextBox96_bptCb()
const p-Home_TextBox97_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox97_bpt"]);
const p-Home_TextBox97_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox97_bpt"]);
const p-Home_TextBox97_bptCb = usep-Home_TextBox97_bptCb()
const p-Home_Image53_bptProps = useStore((state)=>state["Home"]["p-Home_Image53_bpt"]);
const p-Home_Image53_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image53_bpt"]);
const p-Home_Image53_bptCb = usep-Home_Image53_bptCb()
const p-Home_TextBox104_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox104_bpt"]);
const p-Home_TextBox104_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox104_bpt"]);
const p-Home_TextBox104_bptCb = usep-Home_TextBox104_bptCb()
const p-Home_TextBox103_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox103_bpt"]);
const p-Home_TextBox103_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox103_bpt"]);
const p-Home_TextBox103_bptCb = usep-Home_TextBox103_bptCb()
const p-Home_Image52_bptProps = useStore((state)=>state["Home"]["p-Home_Image52_bpt"]);
const p-Home_Image52_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image52_bpt"]);
const p-Home_Image52_bptCb = usep-Home_Image52_bptCb()
const p-Home_TextBox102_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox102_bpt"]);
const p-Home_TextBox102_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox102_bpt"]);
const p-Home_TextBox102_bptCb = usep-Home_TextBox102_bptCb()
const p-Home_TextBox101_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox101_bpt"]);
const p-Home_TextBox101_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox101_bpt"]);
const p-Home_TextBox101_bptCb = usep-Home_TextBox101_bptCb()
const p-Home_TextBox105_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox105_bpt"]);
const p-Home_TextBox105_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox105_bpt"]);
const p-Home_TextBox105_bptCb = usep-Home_TextBox105_bptCb()
const p-Home_TextBox106_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox106_bpt"]);
const p-Home_TextBox106_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox106_bpt"]);
const p-Home_TextBox106_bptCb = usep-Home_TextBox106_bptCb()
const p-Home_Image54_bptProps = useStore((state)=>state["Home"]["p-Home_Image54_bpt"]);
const p-Home_Image54_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image54_bpt"]);
const p-Home_Image54_bptCb = usep-Home_Image54_bptCb()
const p-Home_TextBox107_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox107_bpt"]);
const p-Home_TextBox107_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox107_bpt"]);
const p-Home_TextBox107_bptCb = usep-Home_TextBox107_bptCb()
const p-Home_Image56_bptProps = useStore((state)=>state["Home"]["p-Home_Image56_bpt"]);
const p-Home_Image56_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image56_bpt"]);
const p-Home_Image56_bptCb = usep-Home_Image56_bptCb()
const p-Home_TextBox112_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox112_bpt"]);
const p-Home_TextBox112_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox112_bpt"]);
const p-Home_TextBox112_bptCb = usep-Home_TextBox112_bptCb()
const p-Home_Image55_bptProps = useStore((state)=>state["Home"]["p-Home_Image55_bpt"]);
const p-Home_Image55_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image55_bpt"]);
const p-Home_Image55_bptCb = usep-Home_Image55_bptCb()
const p-Home_TextBox111_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox111_bpt"]);
const p-Home_TextBox111_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox111_bpt"]);
const p-Home_TextBox111_bptCb = usep-Home_TextBox111_bptCb()
const p-Home_Button21_bptProps = useStore((state)=>state["Home"]["p-Home_Button21_bpt"]);
const p-Home_Button21_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Button21_bpt"]);
const p-Home_Button21_bptCb = usep-Home_Button21_bptCb()
const p-Home_TextBox113_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox113_bpt"]);
const p-Home_TextBox113_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox113_bpt"]);
const p-Home_TextBox113_bptCb = usep-Home_TextBox113_bptCb()
const p-Home_Input1_bptProps = useStore((state)=>state["Home"]["p-Home_Input1_bpt"]);
const p-Home_Input1_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input1_bpt"]);
const p-Home_Input1_bptCb = usep-Home_Input1_bptCb()
const p-Home_Input2_bptProps = useStore((state)=>state["Home"]["p-Home_Input2_bpt"]);
const p-Home_Input2_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input2_bpt"]);
const p-Home_Input2_bptCb = usep-Home_Input2_bptCb()
const p-Home_TextBox114_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox114_bpt"]);
const p-Home_TextBox114_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox114_bpt"]);
const p-Home_TextBox114_bptCb = usep-Home_TextBox114_bptCb()
const p-Home_Input9_bptProps = useStore((state)=>state["Home"]["p-Home_Input9_bpt"]);
const p-Home_Input9_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input9_bpt"]);
const p-Home_Input9_bptCb = usep-Home_Input9_bptCb()
const p-Home_TextBox120_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox120_bpt"]);
const p-Home_TextBox120_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox120_bpt"]);
const p-Home_TextBox120_bptCb = usep-Home_TextBox120_bptCb()
const p-Home_Input6_bptProps = useStore((state)=>state["Home"]["p-Home_Input6_bpt"]);
const p-Home_Input6_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input6_bpt"]);
const p-Home_Input6_bptCb = usep-Home_Input6_bptCb()
const p-Home_TextBox118_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox118_bpt"]);
const p-Home_TextBox118_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox118_bpt"]);
const p-Home_TextBox118_bptCb = usep-Home_TextBox118_bptCb()
const p-Home_Input5_bptProps = useStore((state)=>state["Home"]["p-Home_Input5_bpt"]);
const p-Home_Input5_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input5_bpt"]);
const p-Home_Input5_bptCb = usep-Home_Input5_bptCb()
const p-Home_TextBox117_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox117_bpt"]);
const p-Home_TextBox117_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox117_bpt"]);
const p-Home_TextBox117_bptCb = usep-Home_TextBox117_bptCb()
const p-Home_TextBox116_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox116_bpt"]);
const p-Home_TextBox116_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox116_bpt"]);
const p-Home_TextBox116_bptCb = usep-Home_TextBox116_bptCb()
const p-Home_Input4_bptProps = useStore((state)=>state["Home"]["p-Home_Input4_bpt"]);
const p-Home_Input4_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input4_bpt"]);
const p-Home_Input4_bptCb = usep-Home_Input4_bptCb()
const p-Home_Input3_bptProps = useStore((state)=>state["Home"]["p-Home_Input3_bpt"]);
const p-Home_Input3_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Input3_bpt"]);
const p-Home_Input3_bptCb = usep-Home_Input3_bptCb()
const p-Home_TextBox115_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox115_bpt"]);
const p-Home_TextBox115_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox115_bpt"]);
const p-Home_TextBox115_bptCb = usep-Home_TextBox115_bptCb()
const p-Home_Image59_bptProps = useStore((state)=>state["Home"]["p-Home_Image59_bpt"]);
const p-Home_Image59_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image59_bpt"]);
const p-Home_Image59_bptCb = usep-Home_Image59_bptCb()
const p-Home_Image58_bptProps = useStore((state)=>state["Home"]["p-Home_Image58_bpt"]);
const p-Home_Image58_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image58_bpt"]);
const p-Home_Image58_bptCb = usep-Home_Image58_bptCb()
const p-Home_Image61_bptProps = useStore((state)=>state["Home"]["p-Home_Image61_bpt"]);
const p-Home_Image61_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image61_bpt"]);
const p-Home_Image61_bptCb = usep-Home_Image61_bptCb()
const p-Home_Image60_bptProps = useStore((state)=>state["Home"]["p-Home_Image60_bpt"]);
const p-Home_Image60_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image60_bpt"]);
const p-Home_Image60_bptCb = usep-Home_Image60_bptCb()
const p-Home_Image62_bptProps = useStore((state)=>state["Home"]["p-Home_Image62_bpt"]);
const p-Home_Image62_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image62_bpt"]);
const p-Home_Image62_bptCb = usep-Home_Image62_bptCb()
const p-Home_Image63_bptProps = useStore((state)=>state["Home"]["p-Home_Image63_bpt"]);
const p-Home_Image63_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image63_bpt"]);
const p-Home_Image63_bptCb = usep-Home_Image63_bptCb()
const p-Home_TextBox122_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox122_bpt"]);
const p-Home_TextBox122_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox122_bpt"]);
const p-Home_TextBox122_bptCb = usep-Home_TextBox122_bptCb()
const p-Home_TextBox121_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox121_bpt"]);
const p-Home_TextBox121_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox121_bpt"]);
const p-Home_TextBox121_bptCb = usep-Home_TextBox121_bptCb()
const p-Home_Image64_bptProps = useStore((state)=>state["Home"]["p-Home_Image64_bpt"]);
const p-Home_Image64_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image64_bpt"]);
const p-Home_Image64_bptCb = usep-Home_Image64_bptCb()
const p-Home_TextBox123_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox123_bpt"]);
const p-Home_TextBox123_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox123_bpt"]);
const p-Home_TextBox123_bptCb = usep-Home_TextBox123_bptCb()
const p-Home_Image65_bptProps = useStore((state)=>state["Home"]["p-Home_Image65_bpt"]);
const p-Home_Image65_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image65_bpt"]);
const p-Home_Image65_bptCb = usep-Home_Image65_bptCb()
const p-Home_Image66_bptProps = useStore((state)=>state["Home"]["p-Home_Image66_bpt"]);
const p-Home_Image66_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image66_bpt"]);
const p-Home_Image66_bptCb = usep-Home_Image66_bptCb()
const p-Home_Image69_bptProps = useStore((state)=>state["Home"]["p-Home_Image69_bpt"]);
const p-Home_Image69_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image69_bpt"]);
const p-Home_Image69_bptCb = usep-Home_Image69_bptCb()
const p-Home_Image68_bptProps = useStore((state)=>state["Home"]["p-Home_Image68_bpt"]);
const p-Home_Image68_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image68_bpt"]);
const p-Home_Image68_bptCb = usep-Home_Image68_bptCb()
const p-Home_Image67_bptProps = useStore((state)=>state["Home"]["p-Home_Image67_bpt"]);
const p-Home_Image67_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image67_bpt"]);
const p-Home_Image67_bptCb = usep-Home_Image67_bptCb()
const p-Home_TextBox124_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox124_bpt"]);
const p-Home_TextBox124_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox124_bpt"]);
const p-Home_TextBox124_bptCb = usep-Home_TextBox124_bptCb()
const p-Home_Image72_bptProps = useStore((state)=>state["Home"]["p-Home_Image72_bpt"]);
const p-Home_Image72_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image72_bpt"]);
const p-Home_Image72_bptCb = usep-Home_Image72_bptCb()
const p-Home_Image73_bptProps = useStore((state)=>state["Home"]["p-Home_Image73_bpt"]);
const p-Home_Image73_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image73_bpt"]);
const p-Home_Image73_bptCb = usep-Home_Image73_bptCb()
const p-Home_Image70_bptProps = useStore((state)=>state["Home"]["p-Home_Image70_bpt"]);
const p-Home_Image70_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image70_bpt"]);
const p-Home_Image70_bptCb = usep-Home_Image70_bptCb()
const p-Home_Image71_bptProps = useStore((state)=>state["Home"]["p-Home_Image71_bpt"]);
const p-Home_Image71_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_Image71_bpt"]);
const p-Home_Image71_bptCb = usep-Home_Image71_bptCb()
const p-Home_TextBox125_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox125_bpt"]);
const p-Home_TextBox125_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox125_bpt"]);
const p-Home_TextBox125_bptCb = usep-Home_TextBox125_bptCb()
const p-Home_TextBox130_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox130_bpt"]);
const p-Home_TextBox130_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox130_bpt"]);
const p-Home_TextBox130_bptCb = usep-Home_TextBox130_bptCb()
const p-Home_TextBox132_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox132_bpt"]);
const p-Home_TextBox132_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox132_bpt"]);
const p-Home_TextBox132_bptCb = usep-Home_TextBox132_bptCb()
const p-Home_TextBox131_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox131_bpt"]);
const p-Home_TextBox131_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox131_bpt"]);
const p-Home_TextBox131_bptCb = usep-Home_TextBox131_bptCb()
const p-Home_TextBox129_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox129_bpt"]);
const p-Home_TextBox129_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox129_bpt"]);
const p-Home_TextBox129_bptCb = usep-Home_TextBox129_bptCb()
const p-Home_TextBox128_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox128_bpt"]);
const p-Home_TextBox128_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox128_bpt"]);
const p-Home_TextBox128_bptCb = usep-Home_TextBox128_bptCb()
const p-Home_TextBox126_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox126_bpt"]);
const p-Home_TextBox126_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox126_bpt"]);
const p-Home_TextBox126_bptCb = usep-Home_TextBox126_bptCb()
const p-Home_TextBox127_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox127_bpt"]);
const p-Home_TextBox127_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox127_bpt"]);
const p-Home_TextBox127_bptCb = usep-Home_TextBox127_bptCb()
const p-Home_TextBox139_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox139_bpt"]);
const p-Home_TextBox139_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox139_bpt"]);
const p-Home_TextBox139_bptCb = usep-Home_TextBox139_bptCb()
const p-Home_TextBox138_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox138_bpt"]);
const p-Home_TextBox138_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox138_bpt"]);
const p-Home_TextBox138_bptCb = usep-Home_TextBox138_bptCb()
const p-Home_TextBox141_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox141_bpt"]);
const p-Home_TextBox141_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox141_bpt"]);
const p-Home_TextBox141_bptCb = usep-Home_TextBox141_bptCb()
const p-Home_TextBox136_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox136_bpt"]);
const p-Home_TextBox136_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox136_bpt"]);
const p-Home_TextBox136_bptCb = usep-Home_TextBox136_bptCb()
const p-Home_TextBox140_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox140_bpt"]);
const p-Home_TextBox140_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox140_bpt"]);
const p-Home_TextBox140_bptCb = usep-Home_TextBox140_bptCb()
const p-Home_TextBox137_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox137_bpt"]);
const p-Home_TextBox137_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox137_bpt"]);
const p-Home_TextBox137_bptCb = usep-Home_TextBox137_bptCb()
const p-Home_TextBox135_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox135_bpt"]);
const p-Home_TextBox135_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox135_bpt"]);
const p-Home_TextBox135_bptCb = usep-Home_TextBox135_bptCb()
const p-Home_TextBox134_bptProps = useStore((state)=>state["Home"]["p-Home_TextBox134_bpt"]);
const p-Home_TextBox134_bptIoProps = useIoStore((state)=>state["Home"]["p-Home_TextBox134_bpt"]);
const p-Home_TextBox134_bptCb = usep-Home_TextBox134_bptCb()

  return (<>
  <Flex className="p-Home p-Home_Flex1_bpt bpt" {...p-Home_Flex1_bptProps} {...p-Home_Flex1_bptCb} {...p-Home_Flex1_bptIoProps}>
<Flex className="p-Home p-Home_Flex2_bpt bpt" {...p-Home_Flex2_bptProps} {...p-Home_Flex2_bptCb} {...p-Home_Flex2_bptIoProps}>
<Flex className="p-Home p-Home_Flex4_bpt bpt" {...p-Home_Flex4_bptProps} {...p-Home_Flex4_bptCb} {...p-Home_Flex4_bptIoProps}>
<Image className="p-Home p-Home_Image2_bpt bpt" {...p-Home_Image2_bptProps} {...p-Home_Image2_bptCb} {...p-Home_Image2_bptIoProps}/>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home p-Home_Flex138_bpt bpt" {...p-Home_Flex138_bptProps} {...p-Home_Flex138_bptCb} {...p-Home_Flex138_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox1_bpt bpt" {...p-Home_TextBox1_bptProps} {...p-Home_TextBox1_bptCb} {...p-Home_TextBox1_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox2_bpt bpt" {...p-Home_TextBox2_bptProps} {...p-Home_TextBox2_bptCb} {...p-Home_TextBox2_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox3_bpt bpt" {...p-Home_TextBox3_bptProps} {...p-Home_TextBox3_bptCb} {...p-Home_TextBox3_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox4_bpt bpt" {...p-Home_TextBox4_bptProps} {...p-Home_TextBox4_bptCb} {...p-Home_TextBox4_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox6_bpt bpt" {...p-Home_TextBox6_bptProps} {...p-Home_TextBox6_bptCb} {...p-Home_TextBox6_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex3_bpt bpt" {...p-Home_Flex3_bptProps} {...p-Home_Flex3_bptCb} {...p-Home_Flex3_bptIoProps}>
<Button className="p-Home p-Home_Button1_bpt bpt" {...p-Home_Button1_bptProps} {...p-Home_Button1_bptCb} {...p-Home_Button1_bptIoProps}/>
<Button className="p-Home p-Home_Button2_bpt bpt" {...p-Home_Button2_bptProps} {...p-Home_Button2_bptCb} {...p-Home_Button2_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex5_bpt bpt" {...p-Home_Flex5_bptProps} {...p-Home_Flex5_bptCb} {...p-Home_Flex5_bptIoProps}>
<Flex className="p-Home p-Home_Flex6_bpt bpt" {...p-Home_Flex6_bptProps} {...p-Home_Flex6_bptCb} {...p-Home_Flex6_bptIoProps}>
<Flex className="p-Home p-Home_Flex10_bpt bpt" {...p-Home_Flex10_bptProps} {...p-Home_Flex10_bptCb} {...p-Home_Flex10_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox7_bpt bpt" {...p-Home_TextBox7_bptProps} {...p-Home_TextBox7_bptCb} {...p-Home_TextBox7_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox8_bpt bpt" {...p-Home_TextBox8_bptProps} {...p-Home_TextBox8_bptCb} {...p-Home_TextBox8_bptIoProps}/>
</Flex>
<TextBox className="p-Home p-Home_TextBox9_bpt bpt" {...p-Home_TextBox9_bptProps} {...p-Home_TextBox9_bptCb} {...p-Home_TextBox9_bptIoProps}/>
<Flex className="p-Home p-Home_Flex8_bpt bpt" {...p-Home_Flex8_bptProps} {...p-Home_Flex8_bptCb} {...p-Home_Flex8_bptIoProps}>
<Flex className="p-Home p-Home_Flex9_bpt bpt" {...p-Home_Flex9_bptProps} {...p-Home_Flex9_bptCb} {...p-Home_Flex9_bptIoProps}>
<Button className="p-Home p-Home_Button3_bpt bpt" {...p-Home_Button3_bptProps} {...p-Home_Button3_bptCb} {...p-Home_Button3_bptIoProps}/>
<Button className="p-Home p-Home_Button4_bpt bpt" {...p-Home_Button4_bptProps} {...p-Home_Button4_bptCb} {...p-Home_Button4_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex7_bpt bpt" {...p-Home_Flex7_bptProps} {...p-Home_Flex7_bptCb} {...p-Home_Flex7_bptIoProps}>
<Image className="p-Home p-Home_Image5_bpt bpt" {...p-Home_Image5_bptProps} {...p-Home_Image5_bptCb} {...p-Home_Image5_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex11_bpt bpt" {...p-Home_Flex11_bptProps} {...p-Home_Flex11_bptCb} {...p-Home_Flex11_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox10_bpt bpt" {...p-Home_TextBox10_bptProps} {...p-Home_TextBox10_bptCb} {...p-Home_TextBox10_bptIoProps}/>
<Flex className="p-Home p-Home_Flex12_bpt bpt" {...p-Home_Flex12_bptProps} {...p-Home_Flex12_bptCb} {...p-Home_Flex12_bptIoProps}>
<Flex className="p-Home p-Home_Flex371_bpt bpt" {...p-Home_Flex371_bptProps} {...p-Home_Flex371_bptCb} {...p-Home_Flex371_bptIoProps}>
<Image className="p-Home p-Home_Image6_bpt bpt" {...p-Home_Image6_bptProps} {...p-Home_Image6_bptCb} {...p-Home_Image6_bptIoProps}/>
<Image className="p-Home p-Home_Image10_bpt bpt" {...p-Home_Image10_bptProps} {...p-Home_Image10_bptCb} {...p-Home_Image10_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex373_bpt bpt" {...p-Home_Flex373_bptProps} {...p-Home_Flex373_bptCb} {...p-Home_Flex373_bptIoProps}>
<Image className="p-Home p-Home_Image198_bpt bpt" {...p-Home_Image198_bptProps} {...p-Home_Image198_bptCb} {...p-Home_Image198_bptIoProps}/>
<Image className="p-Home p-Home_Image197_bpt bpt" {...p-Home_Image197_bptProps} {...p-Home_Image197_bptCb} {...p-Home_Image197_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex13_bpt bpt" {...p-Home_Flex13_bptProps} {...p-Home_Flex13_bptCb} {...p-Home_Flex13_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox11_bpt bpt" {...p-Home_TextBox11_bptProps} {...p-Home_TextBox11_bptCb} {...p-Home_TextBox11_bptIoProps}/>
<Flex className="p-Home p-Home_Flex14_bpt bpt" {...p-Home_Flex14_bptProps} {...p-Home_Flex14_bptCb} {...p-Home_Flex14_bptIoProps}>
<Flex className="p-Home p-Home_Flex365_bpt bpt" {...p-Home_Flex365_bptProps} {...p-Home_Flex365_bptCb} {...p-Home_Flex365_bptIoProps}>
<Flex className="p-Home p-Home_Flex15_bpt bpt" {...p-Home_Flex15_bptProps} {...p-Home_Flex15_bptCb} {...p-Home_Flex15_bptIoProps}>
<Image className="p-Home p-Home_Image11_bpt bpt" {...p-Home_Image11_bptProps} {...p-Home_Image11_bptCb} {...p-Home_Image11_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox13_bpt bpt" {...p-Home_TextBox13_bptProps} {...p-Home_TextBox13_bptCb} {...p-Home_TextBox13_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox14_bpt bpt" {...p-Home_TextBox14_bptProps} {...p-Home_TextBox14_bptCb} {...p-Home_TextBox14_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox12_bpt bpt" {...p-Home_TextBox12_bptProps} {...p-Home_TextBox12_bptCb} {...p-Home_TextBox12_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex366_bpt bpt" {...p-Home_Flex366_bptProps} {...p-Home_Flex366_bptCb} {...p-Home_Flex366_bptIoProps}>
<Image className="p-Home p-Home_Image195_bpt bpt" {...p-Home_Image195_bptProps} {...p-Home_Image195_bptCb} {...p-Home_Image195_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox383_bpt bpt" {...p-Home_TextBox383_bptProps} {...p-Home_TextBox383_bptCb} {...p-Home_TextBox383_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox384_bpt bpt" {...p-Home_TextBox384_bptProps} {...p-Home_TextBox384_bptCb} {...p-Home_TextBox384_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox382_bpt bpt" {...p-Home_TextBox382_bptProps} {...p-Home_TextBox382_bptCb} {...p-Home_TextBox382_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex367_bpt bpt" {...p-Home_Flex367_bptProps} {...p-Home_Flex367_bptCb} {...p-Home_Flex367_bptIoProps}>
<Flex className="p-Home p-Home_Flex21_bpt bpt" {...p-Home_Flex21_bptProps} {...p-Home_Flex21_bptCb} {...p-Home_Flex21_bptIoProps}>
<Image className="p-Home p-Home_Image17_bpt bpt" {...p-Home_Image17_bptProps} {...p-Home_Image17_bptCb} {...p-Home_Image17_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox31_bpt bpt" {...p-Home_TextBox31_bptProps} {...p-Home_TextBox31_bptCb} {...p-Home_TextBox31_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox30_bpt bpt" {...p-Home_TextBox30_bptProps} {...p-Home_TextBox30_bptCb} {...p-Home_TextBox30_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox32_bpt bpt" {...p-Home_TextBox32_bptProps} {...p-Home_TextBox32_bptCb} {...p-Home_TextBox32_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex368_bpt bpt" {...p-Home_Flex368_bptProps} {...p-Home_Flex368_bptCb} {...p-Home_Flex368_bptIoProps}>
<Image className="p-Home p-Home_Image196_bpt bpt" {...p-Home_Image196_bptProps} {...p-Home_Image196_bptCb} {...p-Home_Image196_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox386_bpt bpt" {...p-Home_TextBox386_bptProps} {...p-Home_TextBox386_bptCb} {...p-Home_TextBox386_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox387_bpt bpt" {...p-Home_TextBox387_bptProps} {...p-Home_TextBox387_bptCb} {...p-Home_TextBox387_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox385_bpt bpt" {...p-Home_TextBox385_bptProps} {...p-Home_TextBox385_bptCb} {...p-Home_TextBox385_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex69_bpt bpt" {...p-Home_Flex69_bptProps} {...p-Home_Flex69_bptCb} {...p-Home_Flex69_bptIoProps}>
<Button className="p-Home p-Home_Button17_bpt bpt" {...p-Home_Button17_bptProps} {...p-Home_Button17_bptCb} {...p-Home_Button17_bptIoProps}/>
<Button className="p-Home p-Home_Button18_bpt bpt" {...p-Home_Button18_bptProps} {...p-Home_Button18_bptCb} {...p-Home_Button18_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex26_bpt bpt" {...p-Home_Flex26_bptProps} {...p-Home_Flex26_bptCb} {...p-Home_Flex26_bptIoProps}>
<Flex className="p-Home p-Home_Flex27_bpt bpt" {...p-Home_Flex27_bptProps} {...p-Home_Flex27_bptCb} {...p-Home_Flex27_bptIoProps}>
<Image className="p-Home p-Home_Image19_bpt bpt" {...p-Home_Image19_bptProps} {...p-Home_Image19_bptCb} {...p-Home_Image19_bptIoProps}/>
<Flex className="p-Home p-Home_Flex29_bpt bpt" {...p-Home_Flex29_bptProps} {...p-Home_Flex29_bptCb} {...p-Home_Flex29_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox36_bpt bpt" {...p-Home_TextBox36_bptProps} {...p-Home_TextBox36_bptCb} {...p-Home_TextBox36_bptIoProps}/>
<Flex className="p-Home p-Home_Flex30_bpt bpt" {...p-Home_Flex30_bptProps} {...p-Home_Flex30_bptCb} {...p-Home_Flex30_bptIoProps}>
<Image className="p-Home p-Home_Image20_bpt bpt" {...p-Home_Image20_bptProps} {...p-Home_Image20_bptCb} {...p-Home_Image20_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox38_bpt bpt" {...p-Home_TextBox38_bptProps} {...p-Home_TextBox38_bptCb} {...p-Home_TextBox38_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex35_bpt bpt" {...p-Home_Flex35_bptProps} {...p-Home_Flex35_bptCb} {...p-Home_Flex35_bptIoProps}>
<Image className="p-Home p-Home_Image25_bpt bpt" {...p-Home_Image25_bptProps} {...p-Home_Image25_bptCb} {...p-Home_Image25_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox43_bpt bpt" {...p-Home_TextBox43_bptProps} {...p-Home_TextBox43_bptCb} {...p-Home_TextBox43_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex32_bpt bpt" {...p-Home_Flex32_bptProps} {...p-Home_Flex32_bptCb} {...p-Home_Flex32_bptIoProps}>
<Image className="p-Home p-Home_Image22_bpt bpt" {...p-Home_Image22_bptProps} {...p-Home_Image22_bptCb} {...p-Home_Image22_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox40_bpt bpt" {...p-Home_TextBox40_bptProps} {...p-Home_TextBox40_bptCb} {...p-Home_TextBox40_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex28_bpt bpt" {...p-Home_Flex28_bptProps} {...p-Home_Flex28_bptCb} {...p-Home_Flex28_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox44_bpt bpt" {...p-Home_TextBox44_bptProps} {...p-Home_TextBox44_bptCb} {...p-Home_TextBox44_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox45_bpt bpt" {...p-Home_TextBox45_bptProps} {...p-Home_TextBox45_bptCb} {...p-Home_TextBox45_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox46_bpt bpt" {...p-Home_TextBox46_bptProps} {...p-Home_TextBox46_bptCb} {...p-Home_TextBox46_bptIoProps}/>
<Flex className="p-Home p-Home_Flex37_bpt bpt" {...p-Home_Flex37_bptProps} {...p-Home_Flex37_bptCb} {...p-Home_Flex37_bptIoProps}>
<Button className="p-Home p-Home_Button12_bpt bpt" {...p-Home_Button12_bptProps} {...p-Home_Button12_bptCb} {...p-Home_Button12_bptIoProps}/>
<Button className="p-Home p-Home_Button11_bpt bpt" {...p-Home_Button11_bptProps} {...p-Home_Button11_bptCb} {...p-Home_Button11_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex38_bpt bpt" {...p-Home_Flex38_bptProps} {...p-Home_Flex38_bptCb} {...p-Home_Flex38_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox47_bpt bpt" {...p-Home_TextBox47_bptProps} {...p-Home_TextBox47_bptCb} {...p-Home_TextBox47_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox48_bpt bpt" {...p-Home_TextBox48_bptProps} {...p-Home_TextBox48_bptCb} {...p-Home_TextBox48_bptIoProps}/>
<Flex className="p-Home p-Home_Flex39_bpt bpt" {...p-Home_Flex39_bptProps} {...p-Home_Flex39_bptCb} {...p-Home_Flex39_bptIoProps}>
<Flex className="p-Home p-Home_Flex40_bpt bpt" {...p-Home_Flex40_bptProps} {...p-Home_Flex40_bptCb} {...p-Home_Flex40_bptIoProps}>
<Flex className="p-Home p-Home_Flex297_bpt bpt" {...p-Home_Flex297_bptProps} {...p-Home_Flex297_bptCb} {...p-Home_Flex297_bptIoProps}>
<Flex className="p-Home p-Home_Product_Card_1_bpt bpt" {...p-Home_Product_Card_1_bptProps} {...p-Home_Product_Card_1_bptCb} {...p-Home_Product_Card_1_bptIoProps}>
<Flex className="p-Home p-Home_Flex42_bpt bpt" {...p-Home_Flex42_bptProps} {...p-Home_Flex42_bptCb} {...p-Home_Flex42_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_1_bpt bpt" {...p-Home_Product_Price_1_bptProps} {...p-Home_Product_Price_1_bptCb} {...p-Home_Product_Price_1_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_1_bpt bpt" {...p-Home_Product_Image_1_bptProps} {...p-Home_Product_Image_1_bptCb} {...p-Home_Product_Image_1_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_1_bpt bpt" {...p-Home_Product_Name_1_bptProps} {...p-Home_Product_Name_1_bptCb} {...p-Home_Product_Name_1_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_1_bpt bpt" {...p-Home_Product_About_1_bptProps} {...p-Home_Product_About_1_bptCb} {...p-Home_Product_About_1_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Product_Card_2_bpt bpt" {...p-Home_Product_Card_2_bptProps} {...p-Home_Product_Card_2_bptCb} {...p-Home_Product_Card_2_bptIoProps}>
<Flex className="p-Home p-Home_Flex43_bpt bpt" {...p-Home_Flex43_bptProps} {...p-Home_Flex43_bptCb} {...p-Home_Flex43_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_2_bpt bpt" {...p-Home_Product_Price_2_bptProps} {...p-Home_Product_Price_2_bptCb} {...p-Home_Product_Price_2_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_2_bpt bpt" {...p-Home_Product_Image_2_bptProps} {...p-Home_Product_Image_2_bptCb} {...p-Home_Product_Image_2_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_2_bpt bpt" {...p-Home_Product_Name_2_bptProps} {...p-Home_Product_Name_2_bptCb} {...p-Home_Product_Name_2_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_2_bpt bpt" {...p-Home_Product_About_2_bptProps} {...p-Home_Product_About_2_bptCb} {...p-Home_Product_About_2_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex298_bpt bpt" {...p-Home_Flex298_bptProps} {...p-Home_Flex298_bptCb} {...p-Home_Flex298_bptIoProps}>
<Flex className="p-Home p-Home_Product_Card_3_bpt bpt" {...p-Home_Product_Card_3_bptProps} {...p-Home_Product_Card_3_bptCb} {...p-Home_Product_Card_3_bptIoProps}>
<Flex className="p-Home p-Home_Flex45_bpt bpt" {...p-Home_Flex45_bptProps} {...p-Home_Flex45_bptCb} {...p-Home_Flex45_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_3_bpt bpt" {...p-Home_Product_Price_3_bptProps} {...p-Home_Product_Price_3_bptCb} {...p-Home_Product_Price_3_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_3_bpt bpt" {...p-Home_Product_Image_3_bptProps} {...p-Home_Product_Image_3_bptCb} {...p-Home_Product_Image_3_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_3_bpt bpt" {...p-Home_Product_Name_3_bptProps} {...p-Home_Product_Name_3_bptCb} {...p-Home_Product_Name_3_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_3_bpt bpt" {...p-Home_Product_About_3_bptProps} {...p-Home_Product_About_3_bptCb} {...p-Home_Product_About_3_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Product_Card_4_bpt bpt" {...p-Home_Product_Card_4_bptProps} {...p-Home_Product_Card_4_bptCb} {...p-Home_Product_Card_4_bptIoProps}>
<Flex className="p-Home p-Home_Flex47_bpt bpt" {...p-Home_Flex47_bptProps} {...p-Home_Flex47_bptCb} {...p-Home_Flex47_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_4_bpt bpt" {...p-Home_Product_Price_4_bptProps} {...p-Home_Product_Price_4_bptCb} {...p-Home_Product_Price_4_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_4_bpt bpt" {...p-Home_Product_Image_4_bptProps} {...p-Home_Product_Image_4_bptCb} {...p-Home_Product_Image_4_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_4_bpt bpt" {...p-Home_Product_Name_4_bptProps} {...p-Home_Product_Name_4_bptCb} {...p-Home_Product_Name_4_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_4_bpt bpt" {...p-Home_Product_About_4_bptProps} {...p-Home_Product_About_4_bptCb} {...p-Home_Product_About_4_bptIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex57_bpt bpt" {...p-Home_Flex57_bptProps} {...p-Home_Flex57_bptCb} {...p-Home_Flex57_bptIoProps}>
<Flex className="p-Home p-Home_Flex299_bpt bpt" {...p-Home_Flex299_bptProps} {...p-Home_Flex299_bptCb} {...p-Home_Flex299_bptIoProps}>
<Flex className="p-Home p-Home_Product_Card_5_bpt bpt" {...p-Home_Product_Card_5_bptProps} {...p-Home_Product_Card_5_bptCb} {...p-Home_Product_Card_5_bptIoProps}>
<Flex className="p-Home p-Home_Flex52_bpt bpt" {...p-Home_Flex52_bptProps} {...p-Home_Flex52_bptCb} {...p-Home_Flex52_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_5_bpt bpt" {...p-Home_Product_Price_5_bptProps} {...p-Home_Product_Price_5_bptCb} {...p-Home_Product_Price_5_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_5_bpt bpt" {...p-Home_Product_Image_5_bptProps} {...p-Home_Product_Image_5_bptCb} {...p-Home_Product_Image_5_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_5_bpt bpt" {...p-Home_Product_Name_5_bptProps} {...p-Home_Product_Name_5_bptCb} {...p-Home_Product_Name_5_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_5_bpt bpt" {...p-Home_Product_About_5_bptProps} {...p-Home_Product_About_5_bptCb} {...p-Home_Product_About_5_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Product_Card_6_bpt bpt" {...p-Home_Product_Card_6_bptProps} {...p-Home_Product_Card_6_bptCb} {...p-Home_Product_Card_6_bptIoProps}>
<Flex className="p-Home p-Home_Flex51_bpt bpt" {...p-Home_Flex51_bptProps} {...p-Home_Flex51_bptCb} {...p-Home_Flex51_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_6_bpt bpt" {...p-Home_Product_Price_6_bptProps} {...p-Home_Product_Price_6_bptCb} {...p-Home_Product_Price_6_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_6_bpt bpt" {...p-Home_Product_Image_6_bptProps} {...p-Home_Product_Image_6_bptCb} {...p-Home_Product_Image_6_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_6_bpt bpt" {...p-Home_Product_Name_6_bptProps} {...p-Home_Product_Name_6_bptCb} {...p-Home_Product_Name_6_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_6_bpt bpt" {...p-Home_Product_About_6_bptProps} {...p-Home_Product_About_6_bptCb} {...p-Home_Product_About_6_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex300_bpt bpt" {...p-Home_Flex300_bptProps} {...p-Home_Flex300_bptCb} {...p-Home_Flex300_bptIoProps}>
<Flex className="p-Home p-Home_Product_Card_7_bpt bpt" {...p-Home_Product_Card_7_bptProps} {...p-Home_Product_Card_7_bptCb} {...p-Home_Product_Card_7_bptIoProps}>
<Flex className="p-Home p-Home_Flex50_bpt bpt" {...p-Home_Flex50_bptProps} {...p-Home_Flex50_bptCb} {...p-Home_Flex50_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_7_bpt bpt" {...p-Home_Product_Price_7_bptProps} {...p-Home_Product_Price_7_bptCb} {...p-Home_Product_Price_7_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_7_bpt bpt" {...p-Home_Product_Image_7_bptProps} {...p-Home_Product_Image_7_bptCb} {...p-Home_Product_Image_7_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_7_bpt bpt" {...p-Home_Product_Name_7_bptProps} {...p-Home_Product_Name_7_bptCb} {...p-Home_Product_Name_7_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_7_bpt bpt" {...p-Home_Product_About_7_bptProps} {...p-Home_Product_About_7_bptCb} {...p-Home_Product_About_7_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Product_Card_8_bpt bpt" {...p-Home_Product_Card_8_bptProps} {...p-Home_Product_Card_8_bptCb} {...p-Home_Product_Card_8_bptIoProps}>
<Flex className="p-Home p-Home_Flex49_bpt bpt" {...p-Home_Flex49_bptProps} {...p-Home_Flex49_bptCb} {...p-Home_Flex49_bptIoProps}>
<TextBox className="p-Home p-Home_Product_Price_8_bpt bpt" {...p-Home_Product_Price_8_bptProps} {...p-Home_Product_Price_8_bptCb} {...p-Home_Product_Price_8_bptIoProps}/>
</Flex>
<Image className="p-Home p-Home_Product_Image_8_bpt bpt" {...p-Home_Product_Image_8_bptProps} {...p-Home_Product_Image_8_bptCb} {...p-Home_Product_Image_8_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_Name_8_bpt bpt" {...p-Home_Product_Name_8_bptProps} {...p-Home_Product_Name_8_bptCb} {...p-Home_Product_Name_8_bptIoProps}/>
<TextBox className="p-Home p-Home_Product_About_8_bpt bpt" {...p-Home_Product_About_8_bptProps} {...p-Home_Product_About_8_bptCb} {...p-Home_Product_About_8_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex58_bpt bpt" {...p-Home_Flex58_bptProps} {...p-Home_Flex58_bptCb} {...p-Home_Flex58_bptIoProps}>
<Button className="p-Home p-Home_Button14_bpt bpt" {...p-Home_Button14_bptProps} {...p-Home_Button14_bptCb} {...p-Home_Button14_bptIoProps}/>
<Button className="p-Home p-Home_Button13_bpt bpt" {...p-Home_Button13_bptProps} {...p-Home_Button13_bptCb} {...p-Home_Button13_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex59_bpt bpt" {...p-Home_Flex59_bptProps} {...p-Home_Flex59_bptCb} {...p-Home_Flex59_bptIoProps}>
<Flex className="p-Home p-Home_Flex60_bpt bpt" {...p-Home_Flex60_bptProps} {...p-Home_Flex60_bptCb} {...p-Home_Flex60_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox73_bpt bpt" {...p-Home_TextBox73_bptProps} {...p-Home_TextBox73_bptCb} {...p-Home_TextBox73_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox74_bpt bpt" {...p-Home_TextBox74_bptProps} {...p-Home_TextBox74_bptCb} {...p-Home_TextBox74_bptIoProps}/>
<Flex className="p-Home p-Home_Flex62_bpt bpt" {...p-Home_Flex62_bptProps} {...p-Home_Flex62_bptCb} {...p-Home_Flex62_bptIoProps}>
<Button className="p-Home p-Home_Button16_bpt bpt" {...p-Home_Button16_bptProps} {...p-Home_Button16_bptCb} {...p-Home_Button16_bptIoProps}/>
<Button className="p-Home p-Home_Button15_bpt bpt" {...p-Home_Button15_bptProps} {...p-Home_Button15_bptCb} {...p-Home_Button15_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex61_bpt bpt" {...p-Home_Flex61_bptProps} {...p-Home_Flex61_bptCb} {...p-Home_Flex61_bptIoProps}>
<Image className="p-Home p-Home_Image34_bpt bpt" {...p-Home_Image34_bptProps} {...p-Home_Image34_bptCb} {...p-Home_Image34_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex63_bpt bpt" {...p-Home_Flex63_bptProps} {...p-Home_Flex63_bptCb} {...p-Home_Flex63_bptIoProps}>
<Flex className="p-Home p-Home_Flex130_bpt bpt" {...p-Home_Flex130_bptProps} {...p-Home_Flex130_bptCb} {...p-Home_Flex130_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox142_bpt bpt" {...p-Home_TextBox142_bptProps} {...p-Home_TextBox142_bptCb} {...p-Home_TextBox142_bptIoProps}/>
</Flex>
<TextBox className="p-Home p-Home_TextBox75_bpt bpt" {...p-Home_TextBox75_bptProps} {...p-Home_TextBox75_bptCb} {...p-Home_TextBox75_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox76_bpt bpt" {...p-Home_TextBox76_bptProps} {...p-Home_TextBox76_bptCb} {...p-Home_TextBox76_bptIoProps}/>
<Flex className="p-Home p-Home_Flex89_bpt bpt" {...p-Home_Flex89_bptProps} {...p-Home_Flex89_bptCb} {...p-Home_Flex89_bptIoProps}>
<Flex className="p-Home p-Home_Flex128_bpt bpt" {...p-Home_Flex128_bptProps} {...p-Home_Flex128_bptCb} {...p-Home_Flex128_bptIoProps}>
<Image className="p-Home p-Home_Image74_bpt bpt" {...p-Home_Image74_bptProps} {...p-Home_Image74_bptCb} {...p-Home_Image74_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex64_bpt bpt" {...p-Home_Flex64_bptProps} {...p-Home_Flex64_bptCb} {...p-Home_Flex64_bptIoProps}>
<Flex className="p-Home p-Home_Flex65_bpt bpt" {...p-Home_Flex65_bptProps} {...p-Home_Flex65_bptCb} {...p-Home_Flex65_bptIoProps}>
<Flex className="p-Home p-Home_Flex131_bpt bpt" {...p-Home_Flex131_bptProps} {...p-Home_Flex131_bptCb} {...p-Home_Flex131_bptIoProps}>
<Image className="p-Home p-Home_Image44_bpt bpt" {...p-Home_Image44_bptProps} {...p-Home_Image44_bptCb} {...p-Home_Image44_bptIoProps}/>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home p-Home_Flex132_bpt bpt" {...p-Home_Flex132_bptProps} {...p-Home_Flex132_bptCb} {...p-Home_Flex132_bptIoProps}/>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image className="p-Home p-Home_Flex133_bpt bpt" {...p-Home_Flex133_bptProps} {...p-Home_Flex133_bptCb} {...p-Home_Flex133_bptIoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Image className="p-Home p-Home_Flex134_bpt bpt" {...p-Home_Flex134_bptProps} {...p-Home_Flex134_bptCb} {...p-Home_Flex134_bptIoProps}/>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Image className="p-Home p-Home_Flex132_bpt bpt" {...p-Home_Flex132_bptProps} {...p-Home_Flex132_bptCb} {...p-Home_Flex132_bptIoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home p-Home_TextBox78_bpt bpt" {...p-Home_TextBox78_bptProps} {...p-Home_TextBox78_bptCb} {...p-Home_TextBox78_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox79_bpt bpt" {...p-Home_TextBox79_bptProps} {...p-Home_TextBox79_bptCb} {...p-Home_TextBox79_bptIoProps}/>
<Flex className="p-Home p-Home_Flex67_bpt bpt" {...p-Home_Flex67_bptProps} {...p-Home_Flex67_bptCb} {...p-Home_Flex67_bptIoProps}>
<Image className="p-Home p-Home_Image40_bpt bpt" {...p-Home_Image40_bptProps} {...p-Home_Image40_bptCb} {...p-Home_Image40_bptIoProps}/>
<Flex className="p-Home p-Home_Flex68_bpt bpt" {...p-Home_Flex68_bptProps} {...p-Home_Flex68_bptCb} {...p-Home_Flex68_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox81_bpt bpt" {...p-Home_TextBox81_bptProps} {...p-Home_TextBox81_bptCb} {...p-Home_TextBox81_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox80_bpt bpt" {...p-Home_TextBox80_bptProps} {...p-Home_TextBox80_bptCb} {...p-Home_TextBox80_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex129_bpt bpt" {...p-Home_Flex129_bptProps} {...p-Home_Flex129_bptCb} {...p-Home_Flex129_bptIoProps}>
<Image className="p-Home p-Home_Image75_bpt bpt" {...p-Home_Image75_bptProps} {...p-Home_Image75_bptCb} {...p-Home_Image75_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex69_bpt bpt" {...p-Home_Flex69_bptProps} {...p-Home_Flex69_bptCb} {...p-Home_Flex69_bptIoProps}>
<Button className="p-Home p-Home_Button17_bpt bpt" {...p-Home_Button17_bptProps} {...p-Home_Button17_bptCb} {...p-Home_Button17_bptIoProps}/>
<Button className="p-Home p-Home_Button18_bpt bpt" {...p-Home_Button18_bptProps} {...p-Home_Button18_bptCb} {...p-Home_Button18_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex71_bpt bpt" {...p-Home_Flex71_bptProps} {...p-Home_Flex71_bptCb} {...p-Home_Flex71_bptIoProps}>
<Flex className="p-Home p-Home_Flex72_bpt bpt" {...p-Home_Flex72_bptProps} {...p-Home_Flex72_bptCb} {...p-Home_Flex72_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox82_bpt bpt" {...p-Home_TextBox82_bptProps} {...p-Home_TextBox82_bptCb} {...p-Home_TextBox82_bptIoProps}/>
<Flex className="p-Home p-Home_Flex73_bpt bpt" {...p-Home_Flex73_bptProps} {...p-Home_Flex73_bptCb} {...p-Home_Flex73_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox83_bpt bpt" {...p-Home_TextBox83_bptProps} {...p-Home_TextBox83_bptCb} {...p-Home_TextBox83_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex74_bpt bpt" {...p-Home_Flex74_bptProps} {...p-Home_Flex74_bptCb} {...p-Home_Flex74_bptIoProps}>
<Flex className="p-Home p-Home_Flex75_bpt bpt" {...p-Home_Flex75_bptProps} {...p-Home_Flex75_bptCb} {...p-Home_Flex75_bptIoProps}>
<Image className="p-Home p-Home_Image45_bpt bpt" {...p-Home_Image45_bptProps} {...p-Home_Image45_bptCb} {...p-Home_Image45_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox85_bpt bpt" {...p-Home_TextBox85_bptProps} {...p-Home_TextBox85_bptCb} {...p-Home_TextBox85_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox86_bpt bpt" {...p-Home_TextBox86_bptProps} {...p-Home_TextBox86_bptCb} {...p-Home_TextBox86_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox84_bpt bpt" {...p-Home_TextBox84_bptProps} {...p-Home_TextBox84_bptCb} {...p-Home_TextBox84_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex76_bpt bpt" {...p-Home_Flex76_bptProps} {...p-Home_Flex76_bptCb} {...p-Home_Flex76_bptIoProps}>
<Flex className="p-Home p-Home_Flex77_bpt bpt" {...p-Home_Flex77_bptProps} {...p-Home_Flex77_bptCb} {...p-Home_Flex77_bptIoProps}>
<Flex className="p-Home p-Home_Flex81_bpt bpt" {...p-Home_Flex81_bptProps} {...p-Home_Flex81_bptCb} {...p-Home_Flex81_bptIoProps}>
<Image className="p-Home p-Home_Image49_bpt bpt" {...p-Home_Image49_bptProps} {...p-Home_Image49_bptCb} {...p-Home_Image49_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox97_bpt bpt" {...p-Home_TextBox97_bptProps} {...p-Home_TextBox97_bptCb} {...p-Home_TextBox97_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox96_bpt bpt" {...p-Home_TextBox96_bptProps} {...p-Home_TextBox96_bptCb} {...p-Home_TextBox96_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex82_bpt bpt" {...p-Home_Flex82_bptProps} {...p-Home_Flex82_bptCb} {...p-Home_Flex82_bptIoProps}>
<Image className="p-Home p-Home_Image51_bpt bpt" {...p-Home_Image51_bptProps} {...p-Home_Image51_bptCb} {...p-Home_Image51_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox99_bpt bpt" {...p-Home_TextBox99_bptProps} {...p-Home_TextBox99_bptCb} {...p-Home_TextBox99_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox100_bpt bpt" {...p-Home_TextBox100_bptProps} {...p-Home_TextBox100_bptCb} {...p-Home_TextBox100_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex85_bpt bpt" {...p-Home_Flex85_bptProps} {...p-Home_Flex85_bptCb} {...p-Home_Flex85_bptIoProps}>
<Flex className="p-Home p-Home_Flex84_bpt bpt" {...p-Home_Flex84_bptProps} {...p-Home_Flex84_bptCb} {...p-Home_Flex84_bptIoProps}>
<Image className="p-Home p-Home_Image53_bpt bpt" {...p-Home_Image53_bptProps} {...p-Home_Image53_bptCb} {...p-Home_Image53_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox103_bpt bpt" {...p-Home_TextBox103_bptProps} {...p-Home_TextBox103_bptCb} {...p-Home_TextBox103_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox104_bpt bpt" {...p-Home_TextBox104_bptProps} {...p-Home_TextBox104_bptCb} {...p-Home_TextBox104_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex83_bpt bpt" {...p-Home_Flex83_bptProps} {...p-Home_Flex83_bptCb} {...p-Home_Flex83_bptIoProps}>
<Image className="p-Home p-Home_Image52_bpt bpt" {...p-Home_Image52_bptProps} {...p-Home_Image52_bptCb} {...p-Home_Image52_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox102_bpt bpt" {...p-Home_TextBox102_bptProps} {...p-Home_TextBox102_bptCb} {...p-Home_TextBox102_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox101_bpt bpt" {...p-Home_TextBox101_bptProps} {...p-Home_TextBox101_bptCb} {...p-Home_TextBox101_bptIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex90_bpt bpt" {...p-Home_Flex90_bptProps} {...p-Home_Flex90_bptCb} {...p-Home_Flex90_bptIoProps}>
<Flex className="p-Home p-Home_Flex90_bpt bpt" {...p-Home_Flex90_bptProps} {...p-Home_Flex90_bptCb} {...p-Home_Flex90_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox105_bpt bpt" {...p-Home_TextBox105_bptProps} {...p-Home_TextBox105_bptCb} {...p-Home_TextBox105_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox106_bpt bpt" {...p-Home_TextBox106_bptProps} {...p-Home_TextBox106_bptCb} {...p-Home_TextBox106_bptIoProps}/>
<Flex className="p-Home p-Home_Flex93_bpt bpt" {...p-Home_Flex93_bptProps} {...p-Home_Flex93_bptCb} {...p-Home_Flex93_bptIoProps}>
<Image className="p-Home p-Home_Image54_bpt bpt" {...p-Home_Image54_bptProps} {...p-Home_Image54_bptCb} {...p-Home_Image54_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox107_bpt bpt" {...p-Home_TextBox107_bptProps} {...p-Home_TextBox107_bptCb} {...p-Home_TextBox107_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex94_bpt bpt" {...p-Home_Flex94_bptProps} {...p-Home_Flex94_bptCb} {...p-Home_Flex94_bptIoProps}>
<Image className="p-Home p-Home_Image55_bpt bpt" {...p-Home_Image55_bptProps} {...p-Home_Image55_bptCb} {...p-Home_Image55_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox111_bpt bpt" {...p-Home_TextBox111_bptProps} {...p-Home_TextBox111_bptCb} {...p-Home_TextBox111_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex95_bpt bpt" {...p-Home_Flex95_bptProps} {...p-Home_Flex95_bptCb} {...p-Home_Flex95_bptIoProps}>
<Image className="p-Home p-Home_Image56_bpt bpt" {...p-Home_Image56_bptProps} {...p-Home_Image56_bptCb} {...p-Home_Image56_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox112_bpt bpt" {...p-Home_TextBox112_bptProps} {...p-Home_TextBox112_bptCb} {...p-Home_TextBox112_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex92_bpt bpt" {...p-Home_Flex92_bptProps} {...p-Home_Flex92_bptCb} {...p-Home_Flex92_bptIoProps}>
<Flex className="p-Home p-Home_Flex98_bpt bpt" {...p-Home_Flex98_bptProps} {...p-Home_Flex98_bptCb} {...p-Home_Flex98_bptIoProps}>
<Flex className="p-Home p-Home_Flex99_bpt bpt" {...p-Home_Flex99_bptProps} {...p-Home_Flex99_bptCb} {...p-Home_Flex99_bptIoProps}>
<Flex className="p-Home p-Home_Flex100_bpt bpt" {...p-Home_Flex100_bptProps} {...p-Home_Flex100_bptCb} {...p-Home_Flex100_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox113_bpt bpt" {...p-Home_TextBox113_bptProps} {...p-Home_TextBox113_bptCb} {...p-Home_TextBox113_bptIoProps}/>
<Input className="p-Home p-Home_Input1_bpt bpt" {...p-Home_Input1_bptProps} {...p-Home_Input1_bptCb} {...p-Home_Input1_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex101_bpt bpt" {...p-Home_Flex101_bptProps} {...p-Home_Flex101_bptCb} {...p-Home_Flex101_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox114_bpt bpt" {...p-Home_TextBox114_bptProps} {...p-Home_TextBox114_bptCb} {...p-Home_TextBox114_bptIoProps}/>
<Input className="p-Home p-Home_Input2_bpt bpt" {...p-Home_Input2_bptProps} {...p-Home_Input2_bptCb} {...p-Home_Input2_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex104_bpt bpt" {...p-Home_Flex104_bptProps} {...p-Home_Flex104_bptCb} {...p-Home_Flex104_bptIoProps}>
<Flex className="p-Home p-Home_Flex103_bpt bpt" {...p-Home_Flex103_bptProps} {...p-Home_Flex103_bptCb} {...p-Home_Flex103_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox116_bpt bpt" {...p-Home_TextBox116_bptProps} {...p-Home_TextBox116_bptCb} {...p-Home_TextBox116_bptIoProps}/>
<Input className="p-Home p-Home_Input4_bpt bpt" {...p-Home_Input4_bptProps} {...p-Home_Input4_bptCb} {...p-Home_Input4_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex102_bpt bpt" {...p-Home_Flex102_bptProps} {...p-Home_Flex102_bptCb} {...p-Home_Flex102_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox115_bpt bpt" {...p-Home_TextBox115_bptProps} {...p-Home_TextBox115_bptCb} {...p-Home_TextBox115_bptIoProps}/>
<Input className="p-Home p-Home_Input3_bpt bpt" {...p-Home_Input3_bptProps} {...p-Home_Input3_bptCb} {...p-Home_Input3_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex107_bpt bpt" {...p-Home_Flex107_bptProps} {...p-Home_Flex107_bptCb} {...p-Home_Flex107_bptIoProps}>
<Flex className="p-Home p-Home_Flex106_bpt bpt" {...p-Home_Flex106_bptProps} {...p-Home_Flex106_bptCb} {...p-Home_Flex106_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox118_bpt bpt" {...p-Home_TextBox118_bptProps} {...p-Home_TextBox118_bptCb} {...p-Home_TextBox118_bptIoProps}/>
<Input className="p-Home p-Home_Input6_bpt bpt" {...p-Home_Input6_bptProps} {...p-Home_Input6_bptCb} {...p-Home_Input6_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex105_bpt bpt" {...p-Home_Flex105_bptProps} {...p-Home_Flex105_bptCb} {...p-Home_Flex105_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox117_bpt bpt" {...p-Home_TextBox117_bptProps} {...p-Home_TextBox117_bptCb} {...p-Home_TextBox117_bptIoProps}/>
<Input className="p-Home p-Home_Input5_bpt bpt" {...p-Home_Input5_bptProps} {...p-Home_Input5_bptCb} {...p-Home_Input5_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex108_bpt bpt" {...p-Home_Flex108_bptProps} {...p-Home_Flex108_bptCb} {...p-Home_Flex108_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox120_bpt bpt" {...p-Home_TextBox120_bptProps} {...p-Home_TextBox120_bptCb} {...p-Home_TextBox120_bptIoProps}/>
<Input className="p-Home p-Home_Input9_bpt bpt" {...p-Home_Input9_bptProps} {...p-Home_Input9_bptCb} {...p-Home_Input9_bptIoProps}/>
</Flex>
<Button className="p-Home p-Home_Button21_bpt bpt" {...p-Home_Button21_bptProps} {...p-Home_Button21_bptCb} {...p-Home_Button21_bptIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex110_bpt bpt" {...p-Home_Flex110_bptProps} {...p-Home_Flex110_bptCb} {...p-Home_Flex110_bptIoProps}>
<Flex className="p-Home p-Home_Flex112_bpt bpt" {...p-Home_Flex112_bptProps} {...p-Home_Flex112_bptCb} {...p-Home_Flex112_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox122_bpt bpt" {...p-Home_TextBox122_bptProps} {...p-Home_TextBox122_bptCb} {...p-Home_TextBox122_bptIoProps}/>
<Flex className="p-Home p-Home_Flex111_bpt bpt" {...p-Home_Flex111_bptProps} {...p-Home_Flex111_bptCb} {...p-Home_Flex111_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox121_bpt bpt" {...p-Home_TextBox121_bptProps} {...p-Home_TextBox121_bptCb} {...p-Home_TextBox121_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex113_bpt bpt" {...p-Home_Flex113_bptProps} {...p-Home_Flex113_bptCb} {...p-Home_Flex113_bptIoProps}>
<Image className="p-Home p-Home_Image58_bpt bpt" {...p-Home_Image58_bptProps} {...p-Home_Image58_bptCb} {...p-Home_Image58_bptIoProps}/>
<Image className="p-Home p-Home_Image59_bpt bpt" {...p-Home_Image59_bptProps} {...p-Home_Image59_bptCb} {...p-Home_Image59_bptIoProps}/>
<Flex className="p-Home p-Home_Flex114_bpt bpt" {...p-Home_Flex114_bptProps} {...p-Home_Flex114_bptCb} {...p-Home_Flex114_bptIoProps}>
<Flex className="p-Home p-Home_Flex115_bpt bpt" {...p-Home_Flex115_bptProps} {...p-Home_Flex115_bptCb} {...p-Home_Flex115_bptIoProps}>
<Image className="p-Home p-Home_Image61_bpt bpt" {...p-Home_Image61_bptProps} {...p-Home_Image61_bptCb} {...p-Home_Image61_bptIoProps}/>
<Image className="p-Home p-Home_Image60_bpt bpt" {...p-Home_Image60_bptProps} {...p-Home_Image60_bptCb} {...p-Home_Image60_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex116_bpt bpt" {...p-Home_Flex116_bptProps} {...p-Home_Flex116_bptCb} {...p-Home_Flex116_bptIoProps}>
<Image className="p-Home p-Home_Image62_bpt bpt" {...p-Home_Image62_bptProps} {...p-Home_Image62_bptCb} {...p-Home_Image62_bptIoProps}/>
<Image className="p-Home p-Home_Image63_bpt bpt" {...p-Home_Image63_bptProps} {...p-Home_Image63_bptCb} {...p-Home_Image63_bptIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex117_bpt bpt" {...p-Home_Flex117_bptProps} {...p-Home_Flex117_bptCb} {...p-Home_Flex117_bptIoProps}>
<Flex className="p-Home p-Home_Flex118_bpt bpt" {...p-Home_Flex118_bptProps} {...p-Home_Flex118_bptCb} {...p-Home_Flex118_bptIoProps}>
<Image className="p-Home p-Home_Image64_bpt bpt" {...p-Home_Image64_bptProps} {...p-Home_Image64_bptCb} {...p-Home_Image64_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox123_bpt bpt" {...p-Home_TextBox123_bptProps} {...p-Home_TextBox123_bptCb} {...p-Home_TextBox123_bptIoProps}/>
<Flex className="p-Home p-Home_Flex121_bpt bpt" {...p-Home_Flex121_bptProps} {...p-Home_Flex121_bptCb} {...p-Home_Flex121_bptIoProps}>
<Image className="p-Home p-Home_Image65_bpt bpt" {...p-Home_Image65_bptProps} {...p-Home_Image65_bptCb} {...p-Home_Image65_bptIoProps}/>
<Image className="p-Home p-Home_Image66_bpt bpt" {...p-Home_Image66_bptProps} {...p-Home_Image66_bptCb} {...p-Home_Image66_bptIoProps}/>
<Image className="p-Home p-Home_Image67_bpt bpt" {...p-Home_Image67_bptProps} {...p-Home_Image67_bptCb} {...p-Home_Image67_bptIoProps}/>
<Image className="p-Home p-Home_Image68_bpt bpt" {...p-Home_Image68_bptProps} {...p-Home_Image68_bptCb} {...p-Home_Image68_bptIoProps}/>
<Image className="p-Home p-Home_Image69_bpt bpt" {...p-Home_Image69_bptProps} {...p-Home_Image69_bptCb} {...p-Home_Image69_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex119_bpt bpt" {...p-Home_Flex119_bptProps} {...p-Home_Flex119_bptCb} {...p-Home_Flex119_bptIoProps}>
<Flex className="p-Home p-Home_Flex125_bpt bpt" {...p-Home_Flex125_bptProps} {...p-Home_Flex125_bptCb} {...p-Home_Flex125_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox125_bpt bpt" {...p-Home_TextBox125_bptProps} {...p-Home_TextBox125_bptCb} {...p-Home_TextBox125_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox126_bpt bpt" {...p-Home_TextBox126_bptProps} {...p-Home_TextBox126_bptCb} {...p-Home_TextBox126_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox127_bpt bpt" {...p-Home_TextBox127_bptProps} {...p-Home_TextBox127_bptCb} {...p-Home_TextBox127_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox128_bpt bpt" {...p-Home_TextBox128_bptProps} {...p-Home_TextBox128_bptCb} {...p-Home_TextBox128_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox129_bpt bpt" {...p-Home_TextBox129_bptProps} {...p-Home_TextBox129_bptCb} {...p-Home_TextBox129_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox130_bpt bpt" {...p-Home_TextBox130_bptProps} {...p-Home_TextBox130_bptCb} {...p-Home_TextBox130_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox131_bpt bpt" {...p-Home_TextBox131_bptProps} {...p-Home_TextBox131_bptCb} {...p-Home_TextBox131_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox132_bpt bpt" {...p-Home_TextBox132_bptProps} {...p-Home_TextBox132_bptCb} {...p-Home_TextBox132_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex127_bpt bpt" {...p-Home_Flex127_bptProps} {...p-Home_Flex127_bptCb} {...p-Home_Flex127_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox141_bpt bpt" {...p-Home_TextBox141_bptProps} {...p-Home_TextBox141_bptCb} {...p-Home_TextBox141_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox140_bpt bpt" {...p-Home_TextBox140_bptProps} {...p-Home_TextBox140_bptCb} {...p-Home_TextBox140_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox135_bpt bpt" {...p-Home_TextBox135_bptProps} {...p-Home_TextBox135_bptCb} {...p-Home_TextBox135_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox136_bpt bpt" {...p-Home_TextBox136_bptProps} {...p-Home_TextBox136_bptCb} {...p-Home_TextBox136_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox137_bpt bpt" {...p-Home_TextBox137_bptProps} {...p-Home_TextBox137_bptCb} {...p-Home_TextBox137_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox138_bpt bpt" {...p-Home_TextBox138_bptProps} {...p-Home_TextBox138_bptCb} {...p-Home_TextBox138_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox139_bpt bpt" {...p-Home_TextBox139_bptProps} {...p-Home_TextBox139_bptCb} {...p-Home_TextBox139_bptIoProps}/>
<TextBox className="p-Home p-Home_TextBox134_bpt bpt" {...p-Home_TextBox134_bptProps} {...p-Home_TextBox134_bptCb} {...p-Home_TextBox134_bptIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home p-Home_Flex120_bpt bpt" {...p-Home_Flex120_bptProps} {...p-Home_Flex120_bptCb} {...p-Home_Flex120_bptIoProps}>
<TextBox className="p-Home p-Home_TextBox124_bpt bpt" {...p-Home_TextBox124_bptProps} {...p-Home_TextBox124_bptCb} {...p-Home_TextBox124_bptIoProps}/>
<Flex className="p-Home p-Home_Flex124_bpt bpt" {...p-Home_Flex124_bptProps} {...p-Home_Flex124_bptCb} {...p-Home_Flex124_bptIoProps}>
<Flex className="p-Home p-Home_Flex123_bpt bpt" {...p-Home_Flex123_bptProps} {...p-Home_Flex123_bptCb} {...p-Home_Flex123_bptIoProps}>
<Image className="p-Home p-Home_Image72_bpt bpt" {...p-Home_Image72_bptProps} {...p-Home_Image72_bptCb} {...p-Home_Image72_bptIoProps}/>
<Image className="p-Home p-Home_Image73_bpt bpt" {...p-Home_Image73_bptProps} {...p-Home_Image73_bptCb} {...p-Home_Image73_bptIoProps}/>
</Flex>
<Flex className="p-Home p-Home_Flex122_bpt bpt" {...p-Home_Flex122_bptProps} {...p-Home_Flex122_bptCb} {...p-Home_Flex122_bptIoProps}>
<Image className="p-Home p-Home_Image71_bpt bpt" {...p-Home_Image71_bptProps} {...p-Home_Image71_bptCb} {...p-Home_Image71_bptIoProps}/>
<Image className="p-Home p-Home_Image70_bpt bpt" {...p-Home_Image70_bptProps} {...p-Home_Image70_bptCb} {...p-Home_Image70_bptIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
