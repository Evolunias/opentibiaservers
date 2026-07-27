import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-official');
}

export default function WithScreenshotsUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-official" />;
}
