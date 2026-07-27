import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-online');
}

export default function WithScreenshotsXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-online" />;
}
