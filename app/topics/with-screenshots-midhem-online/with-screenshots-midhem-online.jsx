import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-online');
}

export default function WithScreenshotsMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-online" />;
}
