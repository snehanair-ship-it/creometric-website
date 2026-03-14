export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'd like a free digital marketing audit"
  );

  return (
    <a
      href={`https://wa.me/919850950259?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.908 15.908 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.606c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.322-5.668-1.218-4.76-1.97-7.822-6.798-8.06-7.114-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.212-3.452 1.642-3.924.39-.428 1.028-.624 1.64-.624.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.926 1.34 3.27 1.456 3.508.118.238.236.554.078.87-.148.326-.278.47-.516.742-.238.272-.464.48-.702.774-.218.258-.464.534-.198.998.266.462 1.182 1.95 2.538 3.16 1.742 1.554 3.21 2.036 3.666 2.262.39.194.626.162.858-.098.238-.268 1.02-1.186 1.292-1.594.266-.408.538-.34.902-.204.368.136 2.332 1.1 2.732 1.3.4.2.666.296.766.462.096.166.096.966-.294 2.066Z" />
      </svg>
    </a>
  );
}
