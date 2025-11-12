export function UnderwaterFloor() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-5">
      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#1a3d47] via-[#1a3d47]/60 to-transparent" />
      
      {/* Coral and rocks */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
        {/* Coral group 1 */}
        <div className="relative" style={{ marginBottom: '-10px' }}>
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" className="opacity-40">
            {/* Rock base */}
            <ellipse cx="60" cy="170" rx="50" ry="15" fill="#0f2027" />
            <ellipse cx="60" cy="168" rx="45" ry="12" fill="#1a2a33" />
            
            {/* Coral branches */}
            <path d="M 40 170 Q 35 140 30 100 Q 28 80 25 60" stroke="#8B4789" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8" />
            <path d="M 45 170 Q 42 135 40 90 Q 38 70 35 50" stroke="#9D5C96" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M 60 170 Q 58 130 55 80 Q 52 55 48 30" stroke="#A6699A" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M 75 170 Q 78 135 80 90 Q 82 65 85 40" stroke="#8B4789" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.75" />
            <path d="M 85 170 Q 88 145 92 110 Q 94 85 98 65" stroke="#9D5C96" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
            
            {/* Coral polyps */}
            <circle cx="25" cy="60" r="6" fill="#B47FA8" opacity="0.6" />
            <circle cx="35" cy="50" r="5" fill="#B47FA8" opacity="0.6" />
            <circle cx="48" cy="30" r="7" fill="#B47FA8" opacity="0.6" />
            <circle cx="85" cy="40" r="6" fill="#B47FA8" opacity="0.6" />
            <circle cx="98" cy="65" r="5" fill="#B47FA8" opacity="0.6" />
          </svg>
        </div>

        {/* Seaweed group 1 */}
        <div className="relative animate-sway" style={{ marginBottom: '-5px', animationDelay: '0s' }}>
          <svg width="80" height="200" viewBox="0 0 80 200" fill="none" className="opacity-50">
            <path d="M 30 200 Q 25 170 30 140 Q 35 110 28 80 Q 25 50 30 20" stroke="#2D5F4E" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M 50 200 Q 55 165 50 130 Q 45 95 52 60 Q 55 30 50 10" stroke="#3A7A63" strokeWidth="10" fill="none" strokeLinecap="round" />
            
            {/* Side leaves */}
            <ellipse cx="20" cy="120" rx="8" ry="15" fill="#2D5F4E" opacity="0.7" transform="rotate(-20 20 120)" />
            <ellipse cx="60" cy="100" rx="8" ry="15" fill="#3A7A63" opacity="0.7" transform="rotate(20 60 100)" />
            <ellipse cx="22" cy="80" rx="7" ry="12" fill="#2D5F4E" opacity="0.7" transform="rotate(-25 22 80)" />
            <ellipse cx="58" cy="60" rx="7" ry="12" fill="#3A7A63" opacity="0.7" transform="rotate(25 58 60)" />
          </svg>
        </div>

        {/* Rock formation */}
        <div className="relative" style={{ marginBottom: '-10px' }}>
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" className="opacity-50">
            <ellipse cx="75" cy="90" rx="70" ry="20" fill="#0a1a1f" />
            <ellipse cx="75" cy="88" rx="65" ry="18" fill="#0f2027" />
            <path d="M 20 90 Q 40 30 75 20 Q 110 30 130 90" fill="#1a2a33" />
            <path d="M 30 90 Q 50 40 75 30 Q 100 40 120 90" fill="#203540" />
            
            {/* Moss/texture */}
            <circle cx="45" cy="60" r="8" fill="#2D5F4E" opacity="0.3" />
            <circle cx="75" cy="50" r="10" fill="#2D5F4E" opacity="0.3" />
            <circle cx="100" cy="65" r="7" fill="#2D5F4E" opacity="0.3" />
          </svg>
        </div>

        {/* Coral group 2 */}
        <div className="relative" style={{ marginBottom: '-10px' }}>
          <svg width="140" height="160" viewBox="0 0 140 160" fill="none" className="opacity-45">
            <ellipse cx="70" cy="155" rx="55" ry="12" fill="#0f2027" />
            
            {/* Fan coral */}
            <path d="M 70 155 Q 50 130 40 100 L 40 100 Q 55 105 70 100 Q 85 105 100 100 Q 90 130 70 155" fill="#C95D63" opacity="0.7" />
            <path d="M 70 155 Q 55 135 48 110 L 48 110 Q 60 112 70 108 Q 80 112 92 110 Q 85 135 70 155" fill="#D67A7A" opacity="0.6" />
            
            {/* Texture lines */}
            <line x1="70" y1="155" x2="60" y2="110" stroke="#B34E54" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="155" x2="70" y2="105" stroke="#B34E54" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="155" x2="80" y2="110" stroke="#B34E54" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Seaweed group 2 */}
        <div className="relative animate-sway" style={{ marginBottom: '-5px', animationDelay: '1s' }}>
          <svg width="70" height="190" viewBox="0 0 70 190" fill="none" className="opacity-45">
            <path d="M 25 190 Q 30 160 25 130 Q 20 100 28 70 Q 30 40 25 15" stroke="#2D5F4E" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M 45 190 Q 40 155 45 120 Q 50 85 43 50 Q 40 25 45 5" stroke="#3A7A63" strokeWidth="9" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Small coral cluster */}
        <div className="relative" style={{ marginBottom: '-10px' }}>
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" className="opacity-40">
            <ellipse cx="50" cy="125" rx="40" ry="10" fill="#0f2027" />
            
            <circle cx="35" cy="100" r="18" fill="#4A7C8C" opacity="0.7" />
            <circle cx="30" cy="95" r="12" fill="#5A8C9C" opacity="0.6" />
            <circle cx="40" cy="92" r="10" fill="#6A9CAC" opacity="0.6" />
            
            <circle cx="65" cy="105" r="20" fill="#4A7C8C" opacity="0.7" />
            <circle cx="60" cy="100" r="14" fill="#5A8C9C" opacity="0.6" />
            <circle cx="70" cy="98" r="12" fill="#6A9CAC" opacity="0.6" />
            
            <circle cx="50" cy="90" r="15" fill="#4A7C8C" opacity="0.7" />
            <circle cx="48" cy="85" r="10" fill="#5A8C9C" opacity="0.6" />
          </svg>
        </div>

        {/* Tall seaweed */}
        <div className="relative animate-sway" style={{ marginBottom: '-5px', animationDelay: '0.5s' }}>
          <svg width="60" height="220" viewBox="0 0 60 220" fill="none" className="opacity-45">
            <path d="M 30 220 Q 25 180 30 140 Q 35 100 28 60 Q 25 30 30 10" stroke="#2D5F4E" strokeWidth="11" fill="none" strokeLinecap="round" />
            
            <ellipse cx="20" cy="150" rx="8" ry="14" fill="#2D5F4E" opacity="0.7" transform="rotate(-15 20 150)" />
            <ellipse cx="40" cy="130" rx="8" ry="14" fill="#3A7A63" opacity="0.7" transform="rotate(15 40 130)" />
            <ellipse cx="22" cy="100" rx="7" ry="13" fill="#2D5F4E" opacity="0.7" transform="rotate(-20 22 100)" />
            <ellipse cx="38" cy="70" rx="7" ry="13" fill="#3A7A63" opacity="0.7" transform="rotate(20 38 70)" />
            <ellipse cx="25" cy="40" rx="6" ry="11" fill="#2D5F4E" opacity="0.7" transform="rotate(-18 25 40)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
