import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-official');
}

export default function WithScreenshotsCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-official" />;
}
