import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-ots');
}

export default function WithScreenshotsEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-ots" />;
}
