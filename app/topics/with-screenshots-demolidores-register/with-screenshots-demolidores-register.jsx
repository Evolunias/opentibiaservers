import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-register');
}

export default function WithScreenshotsDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-register" />;
}
