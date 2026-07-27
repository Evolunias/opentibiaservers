import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-rules');
}

export default function WithScreenshotsSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-rules" />;
}
