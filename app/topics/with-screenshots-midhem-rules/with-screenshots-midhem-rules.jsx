import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-rules');
}

export default function WithScreenshotsMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-rules" />;
}
