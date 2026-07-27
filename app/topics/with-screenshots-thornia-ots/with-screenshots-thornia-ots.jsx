import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-ots');
}

export default function WithScreenshotsThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-ots" />;
}
