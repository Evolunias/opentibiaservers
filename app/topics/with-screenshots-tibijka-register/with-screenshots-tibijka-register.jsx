import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-register');
}

export default function WithScreenshotsTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-register" />;
}
