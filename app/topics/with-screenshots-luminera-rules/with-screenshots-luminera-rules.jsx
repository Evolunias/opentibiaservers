import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-rules');
}

export default function WithScreenshotsLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-rules" />;
}
