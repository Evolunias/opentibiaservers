import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-rules');
}

export default function WithScreenshotsNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-rules" />;
}
