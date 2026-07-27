import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-online');
}

export default function WithScreenshotsArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-online" />;
}
