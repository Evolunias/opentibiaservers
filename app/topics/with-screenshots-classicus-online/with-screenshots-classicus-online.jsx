import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-online');
}

export default function WithScreenshotsClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-online" />;
}
