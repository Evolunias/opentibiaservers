import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-rules');
}

export default function WithScreenshotsElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-rules" />;
}
