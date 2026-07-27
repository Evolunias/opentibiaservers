import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-online');
}

export default function WithScreenshotsAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-online" />;
}
