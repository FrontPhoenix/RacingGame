/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 scene.gltf
Author: Rtag63 (https://sketchfab.com/Rtag63)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toyota-ft-1-supra-concept-8174db5966924e499cccbbb3e1539ff4
Title: Toyota FT-1 Supra Concept
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import mame from "./scene.gltf";

export default function Model(props) {
  const { nodes, materials } = useGLTF(mame);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, -0.01, 0.35]} scale={1.04}>
          <mesh
            geometry={nodes.mkctft1_body_SUB5_MKCTFT1_CHROME_0.geometry}
            material={materials.MKCTFT1_CHROME}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB4_WCWINDOW_0.geometry}
            material={materials.WCWINDOW}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB2_MKCTFT1_CARBON_0.geometry}
            material={materials.MKCTFT1_CARBON}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB0_WCCARBODY_0.geometry}
            material={materials.WCCARBODY}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB3_MKCTFT1_MESH_0.geometry}
            material={materials.MKCTFT1_MESH}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB1_MKCTFT1_CHASSIS_0.geometry}
            material={materials.MKCTFT1_CHASSIS}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB7_MKCTFT1_BLACK_0.geometry}
            material={materials.MKCTFT1_BLACK}
          />
          <mesh
            geometry={nodes.mkctft1_body_SUB6_MKCTFT1_SYMBOLS_0.geometry}
            material={materials.MKCTFT1_SYMBOLS}
          />
        </group>
        <group position={[0, -0.01, 0.35]} scale={1.04}>
          <mesh
            geometry={nodes.MOTEC_SPEED_MKCTFT1_RPMBAR00_0.geometry}
            material={materials.MKCTFT1_RPMBAR00}
            position={[0.33, 0.92, 0.39]}
            rotation={[-0.75, 0, 0]}
          />
          <mesh
            geometry={nodes.COCKPIT_HR003_MKCTFT1_PLASTIC_0.geometry}
            material={materials.MKCTFT1_PLASTIC}
            position={[0.64, 0.96, 0.1]}
          />
          <group position={[-0.04, -0.01, -0.05]}>
            <mesh
              geometry={nodes.COCKPIT_HR005_SUB1_MKCTFT1_ALU_0.geometry}
              material={materials.MKCTFT1_ALU}
            />
            <mesh
              geometry={nodes.COCKPIT_HR005_SUB0_WCEXTRA1_0.geometry}
              material={materials.WCEXTRA1}
            />
          </group>
          <group position={[-0.04, -0.01, -0.05]}>
            <mesh
              geometry={nodes.COCKPIT_HR006_SUB1_MKCTFT1_ALU_0.geometry}
              material={materials.MKCTFT1_ALU}
            />
            <mesh
              geometry={nodes.COCKPIT_HR006_SUB0_WCEXTRA1_0.geometry}
              material={materials.WCEXTRA1}
            />
          </group>
          <mesh
            geometry={nodes.COCKPIT_HR_SUB0_MKCTFT1_DGLASS_0.geometry}
            material={materials.MKCTFT1_DGLASS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB2_MKCTFT1_PLASTIC_0.geometry}
            material={materials.MKCTFT1_PLASTIC}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB5_MKCTFT1_ALU_0.geometry}
            material={materials.MKCTFT1_ALU}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB4_MKCTFT1_DETAILS_0.geometry}
            material={materials.MKCTFT1_DETAILS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB3_WCEXTRA1_0.geometry}
            material={materials.WCEXTRA1}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB6_MKCTFT1_BUTTONS_0.geometry}
            material={materials.MKCTFT1_BUTTONS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR_SUB1_MKCTFT1_MIRRORSOUT_0.geometry}
            material={materials.MKCTFT1_MIRRORSOUT}
          />
          <mesh
            geometry={nodes.LED_20_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_19_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_18_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_17_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_16_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_15_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_14_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_13_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_12_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_11_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_10_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_9_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_27_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_7_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_6_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_5_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_4_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_3_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_2_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_1_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB0_MKCTFT1_DGLASS_0.geometry}
            material={materials.MKCTFT1_DGLASS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB2_MKCTFT1_PLASTIC_0.geometry}
            material={materials.MKCTFT1_PLASTIC}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB5_MKCTFT1_ALU_0.geometry}
            material={materials.MKCTFT1_ALU}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB4_MKCTFT1_DETAILS_0.geometry}
            material={materials.MKCTFT1_DETAILS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB3_WCEXTRA1_0.geometry}
            material={materials.WCEXTRA1}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB6_MKCTFT1_BUTTONS_0.geometry}
            material={materials.MKCTFT1_BUTTONS}
          />
          <mesh
            geometry={nodes.COCKPIT_HR004_SUB1_MKCTFT1_MIRRORSOUT_0.geometry}
            material={materials.MKCTFT1_MIRRORSOUT}
          />
          <mesh
            geometry={nodes.LED_26_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_25_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_24_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_23_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_22_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_21_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
          <mesh
            geometry={nodes.LED_8_led_rpm_0.geometry}
            material={materials.led_rpm}
          />
        </group>
        <group position={[0, -0.01, 0.35]} scale={1.04}>
          <mesh
            geometry={nodes.mkctft1_mirror_lh_SUB1_MKCTFT1_CARBON_0.geometry}
            material={materials.MKCTFT1_CARBON}
          />
          <mesh
            geometry={nodes.mkctft1_mirror_lh_SUB0_WCCARBODY_0.geometry}
            material={materials.WCCARBODY}
          />
          <mesh
            geometry={
              nodes.mkctft1_mirror_lh_SUB2_MKCTFT1_MIRRORSOUT_0.geometry
            }
            material={materials.MKCTFT1_MIRRORSOUT}
          />
        </group>
        <group position={[0, -0.01, 0.35]} scale={1.04}>
          <mesh
            geometry={nodes.mkctft1_mirror_rh_SUB1_MKCTFT1_CARBON_0.geometry}
            material={materials.MKCTFT1_CARBON}
          />
          <mesh
            geometry={nodes.mkctft1_mirror_rh_SUB0_WCCARBODY_0.geometry}
            material={materials.WCCARBODY}
          />
          <mesh
            geometry={
              nodes.mkctft1_mirror_rh_SUB2_MKCTFT1_MIRRORSOUT_0.geometry
            }
            material={materials.MKCTFT1_MIRRORSOUT}
          />
        </group>
        <mesh
          geometry={nodes.mkctft1_cpit_mirrors_MIRROR_0.geometry}
          material={materials.MIRROR}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <group
          position={[0.34, 0.78, 0.48]}
          rotation={[0.29, 0, 0]}
          scale={1.04}
        >
          <mesh
            geometry={nodes.LED2_10_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.03, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_9_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.03, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_8_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.03, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_7_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_6_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_5_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_4_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_3_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_2_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.LED2_1_led_rpm_2_0.geometry}
            material={materials.led_rpm_2}
            position={[-0.02, 0.15, -0.02]}
            rotation={[-0.29, 0, 0]}
          />
          <mesh
            geometry={nodes.MOTEC_GEAR_MKCTFT1_RPMBAR17_0.geometry}
            material={materials.MKCTFT1_RPMBAR17}
            position={[0, 0.15, -0.02]}
            rotation={[0.5, 0, 0]}
          />
          <mesh
            geometry={nodes.STEER_HR_SUB1_MKCTFT1_CHROME_0.geometry}
            material={materials.MKCTFT1_CHROME}
          />
          <mesh
            geometry={nodes.STEER_HR_SUB4_MKCTFT1_PLASTIC_0.geometry}
            material={materials.MKCTFT1_PLASTIC}
          />
          <mesh
            geometry={nodes.STEER_HR_SUB3_MKCTFT1_ALU_0.geometry}
            material={materials.MKCTFT1_ALU}
          />
          <mesh
            geometry={nodes.STEER_HR_SUB0_MKCTFT1_DETAILS_0.geometry}
            material={materials.MKCTFT1_DETAILS}
          />
          <mesh
            geometry={nodes.STEER_HR_SUB2_WCEXTRA1_0.geometry}
            material={materials.WCEXTRA1}
          />
        </group>
        <mesh
          geometry={nodes.mkctft1_windows_WCWINDOW_0.geometry}
          material={materials.WCWINDOW}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.rlglo_RLGLO_0.geometry}
          material={materials.RLGLO}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.mkctft1_rainlight_MKCTFT1_RAINLIGHT_0.geometry}
          material={materials.MKCTFT1_RAINLIGHT}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.mkctft1_body001black_black_0.geometry}
          material={materials.black}
          position={[0, 0.88, -1.67]}
          scale={1.04}
        />
        <group position={[-0.84, 0.36, -1.02]}>
          <mesh
            geometry={nodes.mkctft1_cal_rr_MKCTFT1_BRAKES_0.geometry}
            material={materials.MKCTFT1_BRAKES}
            scale={1.04}
          />
        </group>
        <group position={[0.84, 0.36, -1.02]}>
          <mesh
            geometry={nodes.mkctft1_cal_lr_MKCTFT1_BRAKES_0.geometry}
            material={materials.MKCTFT1_BRAKES}
            scale={1.04}
          />
        </group>
        <group position={[0.84, 0.36, 1.73]}>
          <mesh
            geometry={nodes.mkctft1_cal_lf_MKCTFT1_BRAKES_0.geometry}
            material={materials.MKCTFT1_BRAKES}
            scale={1.04}
          />
        </group>
        <group position={[-0.84, 0.36, 1.73]}>
          <mesh
            geometry={nodes.mkctft1_cal_rf_MKCTFT1_BRAKES_0.geometry}
            material={materials.MKCTFT1_BRAKES}
            scale={1.04}
          />
        </group>
        <group position={[-0.84, 0.36, -1.02]}>
          <mesh
            geometry={nodes.mkctft1_rim_rr_WCRIMS_0.geometry}
            material={materials.WCRIMS}
            scale={1.04}
          />
          <mesh
            geometry={nodes.mkctft1_bd_rr_DISK_BRAKE_0.geometry}
            material={materials.DISK_BRAKE}
            scale={1.04}
          />
          <group scale={[0.3, 0.25, 0.25]}>
            <mesh
              geometry={nodes.tire_rr_SUB1_tire_wall_0.geometry}
              material={materials.tire_wall}
            />
            <mesh
              geometry={nodes.tire_rr_SUB0_tire_tread_0.geometry}
              material={materials.tire_tread}
            />
          </group>
          <mesh
            geometry={nodes.mkctft1_rim_rr001_blur_lip_0.geometry}
            material={materials.blur_lip}
            scale={1.04}
          />
          <mesh
            geometry={nodes.WHEEL_BLUR_RIM_RR_WHEEL_BLUR_RIM_0.geometry}
            material={materials.WHEEL_BLUR_RIM}
            scale={[1.03, 1.21, 1.21]}
          />
        </group>
        <group position={[0.84, 0.36, 1.73]}>
          <mesh
            geometry={nodes.mkctft1_bd_lf_DISK_BRAKE_0.geometry}
            material={materials.DISK_BRAKE}
            scale={1.04}
          />
          <mesh
            geometry={nodes.mkctft1_rim_lf_WCRIMS_0.geometry}
            material={materials.WCRIMS}
            scale={1.04}
          />
          <group scale={[0.3, 0.25, 0.25]}>
            <mesh
              geometry={nodes.tire_lf_SUB1_tire_wall_0.geometry}
              material={materials.tire_wall}
            />
            <mesh
              geometry={nodes.tire_lf_SUB0_tire_tread_0.geometry}
              material={materials.tire_tread}
            />
          </group>
          <mesh
            geometry={nodes.mkctft1_rim_lf001_blur_lip_0.geometry}
            material={materials.blur_lip}
            scale={1.04}
          />
          <mesh
            geometry={nodes.WHEEL_BLUR_RIM_LF_WHEEL_BLUR_RIM_0.geometry}
            material={materials.WHEEL_BLUR_RIM}
            scale={[1.03, 1.21, 1.21]}
          />
        </group>
        <group position={[-0.84, 0.36, 1.73]}>
          <mesh
            geometry={nodes.mkctft1_rim_rf_WCRIMS_0.geometry}
            material={materials.WCRIMS}
            scale={1.04}
          />
          <mesh
            geometry={nodes.mkctft1_bd_rf_DISK_BRAKE_0.geometry}
            material={materials.DISK_BRAKE}
            scale={1.04}
          />
          <group scale={[0.3, 0.25, 0.25]}>
            <mesh
              geometry={nodes.tire_rf_SUB1_tire_wall_0.geometry}
              material={materials.tire_wall}
            />
            <mesh
              geometry={nodes.tire_rf_SUB0_tire_tread_0.geometry}
              material={materials.tire_tread}
            />
          </group>
          <mesh
            geometry={nodes.mkctft1_rim_rf001_blur_lip_0.geometry}
            material={materials.blur_lip}
            scale={1.04}
          />
          <mesh
            geometry={nodes.WHEEL_BLUR_RIM_RF_WHEEL_BLUR_RIM_0.geometry}
            material={materials.WHEEL_BLUR_RIM}
            position={[-0.01, 0, 0]}
            scale={[1.03, 1.21, 1.21]}
          />
        </group>
        <group position={[0.84, 0.36, -1.02]}>
          <mesh
            geometry={nodes.mkctft1_bd_lr_DISK_BRAKE_0.geometry}
            material={materials.DISK_BRAKE}
            scale={1.04}
          />
          <mesh
            geometry={nodes.mkctft1_rim_lr_WCRIMS_0.geometry}
            material={materials.WCRIMS}
            scale={1.04}
          />
          <group scale={[0.3, 0.25, 0.25]}>
            <mesh
              geometry={nodes.tire_lr_SUB1_tire_wall_0.geometry}
              material={materials.tire_wall}
            />
            <mesh
              geometry={nodes.tire_lr_SUB0_tire_tread_0.geometry}
              material={materials.tire_tread}
            />
          </group>
          <mesh
            geometry={nodes.mkctft1_rim_lr001_blur_lip_0.geometry}
            material={materials.blur_lip}
            scale={1.04}
          />
          <mesh
            geometry={nodes.WHEEL_BLUR_RIM_LR_WHEEL_BLUR_RIM_0.geometry}
            material={materials.WHEEL_BLUR_RIM}
            scale={[1.03, 1.21, 1.21]}
          />
        </group>
        <mesh
          geometry={nodes.LIGHT_POD_LIGHT_POD_0.geometry}
          material={materials.LIGHT_POD}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.LIGHT_FRONT000_LIGHT_FRONT000_0.geometry}
          material={materials.LIGHT_FRONT000}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.LIGHT_REAR000_LIGHT_REAR000_0.geometry}
          material={materials.LIGHT_REAR000}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.LIGHT_FRONT001_LIGHT_FRONT001_0.geometry}
          material={materials.LIGHT_FRONT001}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.LIGHT_FRONT002_LIGHT_FRONT002_0.geometry}
          material={materials.LIGHT_FRONT002}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.mkctft1_body003_exhaust_0.geometry}
          material={materials.exhaust}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.light_glass_light_glass_0.geometry}
          material={materials.light_glass}
          position={[0, -0.01, 0.35]}
          scale={1.04}
        />
        <mesh
          geometry={nodes.Box001_black_0.geometry}
          material={materials.black}
          position={[-0.37, 0.83, -1.69]}
          scale={[0.33, 0.29, 0.36]}
        />
        <mesh
          geometry={nodes.Box002_black_0.geometry}
          material={materials.black}
          position={[0.37, 0.83, -1.69]}
          scale={[0.33, 0.29, 0.36]}
        />
        <group position={[0, 0.88, -1.67]}>
          <mesh
            geometry={nodes.SPOILER_WCCARBODY_0.geometry}
            material={materials.WCCARBODY}
            scale={1.04}
          />
          <mesh
            geometry={nodes.SPOILER001_WCCARBODY_0.geometry}
            material={materials.WCCARBODY}
            scale={1.04}
          />
          <mesh
            geometry={nodes.g_Wing_Turn_SUB1_Plastics_0.geometry}
            material={materials.Plastics}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_Turn_SUB0_Chrome_0.geometry}
            material={materials.Chrome}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_SUB1_Chrome_0.geometry}
            material={materials.Chrome}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_SUB0_Matte_Black_0.geometry}
            material={materials.Matte_Black}
            position={[0, -0.01, 0]}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_Guide_SUB2_Plastics_0.geometry}
            material={materials.Plastics}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_Guide_SUB1_Details_0.geometry}
            material={materials.Details}
            scale={0.43}
          />
          <mesh
            geometry={nodes.g_Wing_Guide_SUB0_Chrome_0.geometry}
            material={materials.Chrome}
            scale={0.43}
          />
        </group>
        <mesh
          geometry={nodes.plate_b01_EXT_PLATE_plastic_0.geometry}
          material={materials.EXT_PLATE_plastic}
          position={[0, 0.55, -1.95]}
          rotation={[2.96, 0, -Math.PI]}
          scale={[0.67, 1.2, 1.3]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(mame);
