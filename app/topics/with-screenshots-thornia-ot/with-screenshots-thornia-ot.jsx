import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-ot');
}

export default function WithScreenshotsThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-ot" />;
}
