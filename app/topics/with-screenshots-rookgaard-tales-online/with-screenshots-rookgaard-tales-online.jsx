import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-online');
}

export default function WithScreenshotsRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-online" />;
}
