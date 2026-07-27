import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-ot');
}

export default function WithScreenshotsCanobOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-ot" />;
}
