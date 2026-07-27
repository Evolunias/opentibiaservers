import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-rules');
}

export default function WithScreenshotsNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-rules" />;
}
