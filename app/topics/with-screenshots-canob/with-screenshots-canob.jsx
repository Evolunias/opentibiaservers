import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob');
}

export default function WithScreenshotsCanobKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob" />;
}
