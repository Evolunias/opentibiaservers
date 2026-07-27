import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-ot');
}

export default function WithScreenshotsEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-ot" />;
}
