interface GameBannerProps {
  title: string
  bannerUrl: string
  ads: number
}

function GameBanner({bannerUrl, title, ads}: GameBannerProps) {
  return (
    <a
      href=""
      className="relative rounded-lg overflow-hidden"
    >
      <img src={bannerUrl} alt={title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {ads === 1 ? "1 anúncio" : `${ads} anúncios`}
        </span>
      </div>
    </a>
  );
}

export { GameBanner }