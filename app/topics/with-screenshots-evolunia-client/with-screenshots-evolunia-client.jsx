import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-client');
}

export default function WithScreenshotsEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-client" />;
}
