import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-rules');
}

export default function WithScreenshotsBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-rules" />;
}
