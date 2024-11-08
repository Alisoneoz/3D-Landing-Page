'use client';
import ModelCard from "@/components/ui/ModelCard";
import ModelScene from "@/components/scenes/ModelScene";
import CubeModel from "@/components/models/CubeModel";
import DodecahedronModel from "@/components/models/DodecahedronModel";

const ModelsShowcase = () => {
  return (
    <section className="mb-16">
      <div className="grid gap-8 md:grid-cols-2">

          <ModelScene environmentPreset="park">
            <CubeModel />
          </ModelScene>
     

     
          <ModelScene environmentPreset="dawn">
            <DodecahedronModel />
          </ModelScene>
    
      </div>
    </section>
  );
};

export default ModelsShowcase;
