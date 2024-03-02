export default function Video() {
    return (
      <video className="h-full w-full rounded-lg" controls>
        <source src="https://res.cloudinary.com/dwftb7joy/video/upload/v1709398185/video/hcbkv91ksfml5pipury3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }