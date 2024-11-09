'use client';
import ModelScene from "@/components/scenes/ModelScene";
import dynamic from 'next/dynamic';

const CubeModel = dynamic(() => import("@/components/models/CubeModel"), {
  ssr: false,
  loading: () => null
});

const DodecahedronModel = dynamic(() => import("@/components/models/DodecahedronModel"), {
  ssr: false,
  loading: () => null
});

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
