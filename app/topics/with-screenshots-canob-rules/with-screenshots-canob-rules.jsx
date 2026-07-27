import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-rules');
}

export default function WithScreenshotsCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-rules" />;
}
