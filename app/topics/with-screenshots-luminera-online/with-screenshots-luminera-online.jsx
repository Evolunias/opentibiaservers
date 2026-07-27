import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-online');
}

export default function WithScreenshotsLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-online" />;
}
