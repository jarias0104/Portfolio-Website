import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "github",
    "microsoftsqlserver",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "react",
    "sqlite",
    "tailwindcss",
    "visualstudiocode",
    "python",
    "unreal-engine",
    "php",
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img 
    src={src} 
    className="size-full object-contain duration-200 rounded-sm hover:scale-110" 
    alt="skill icon"
  />
);