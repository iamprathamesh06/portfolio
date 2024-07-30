import Image from "next/image";
import StarsCanvas from "../../components/StarBackground";

export default function Home() {
  return (
    <main>
      <StarsCanvas>
        <div style={{ padding: '20px', color: 'white' }}>
          <h1>Welcome to My Portfolio</h1>
          <p>This is the content over the starry background.</p>
          {/* Add more content here */}
        </div>
      </StarsCanvas>
    </main>
  );
}
