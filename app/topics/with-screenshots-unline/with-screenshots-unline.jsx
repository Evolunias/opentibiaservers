import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline');
}

export default function WithScreenshotsUnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline" />;
}
