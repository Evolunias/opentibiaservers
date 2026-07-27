import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-rules');
}

export default function WithScreenshotsTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-rules" />;
}
